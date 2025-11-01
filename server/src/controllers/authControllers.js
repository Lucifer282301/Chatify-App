import { sendWelcomeEmail } from "../emails/emailHandlers.js";
import { generateToken } from "../utils/utils.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { ENV } from "../utils/env.js";
import cloudinary from "../utils/cloudinary.js";

export const signupController = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    if (!fullName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long!",
      });
    }

    // Check if emails valid: regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format!",
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "Email is already registered!",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      const savedUser = await newUser.save();
      generateToken(savedUser._id, res);

      try {
        await sendWelcomeEmail({
          email: savedUser.email,
          name: savedUser.fullName,
          clientURL: ENV.CLIENT_URL,
        });
      } catch (emailError) {
        console.error("Failed to send welcome email:", emailError);
      }

      return res.status(201).json({
        success: true,
        message: "User registered successfully!",
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid user data!",
      });
    }
  } catch (error) {
    console.log("Error in signup controller: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format!",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials!",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials!",
      });
    }

    generateToken(user._id, res);
    return res.status(200).json({
      success: true,
      message: "User logged in successfully!",
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in login controller: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const logoutController = (_, res) => {
  res.cookie("jwt", "", { maxAge: 0 });
  return res.status(200).json({
    success: true,
    message: "User logged out successfully!",
  });
};

export const updateProfileController = async (req, res) => {
  try {
    const { profilePic } = req.body;
    if (!profilePic) {
      return res.status(400).json({
        success: false,
        message: "Profile picture is required!",
      });
    }

    const userId = req.user._id;

    const uploadResponse = await cloudinary.uploader.upload(profilePic);

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        profilePic: uploadResponse.secure_url,
      },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Profile updated successfully!",
      updatedUser,
    });
  } catch (error) {
    console.log("Error in update profile controller: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
