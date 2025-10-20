import { resendClient, sender } from "./../utils/resend.js";
import { createWelcomeEmailTemplate } from "./emailTemplates.js";

export const sendWelcomeEmail = async ({ email, name, clientURL }) => {
  try {
    const { data, error } = await resendClient.emails.send({
      from: `${sender.name} <${sender.email}>`,
      to: email,
      subject: "Welcome to Chatify!",
      html: createWelcomeEmailTemplate(name, clientURL),
    });
    if (error) {
      console.log("Error sending welcome email:", error);
      throw new Error("Failed to send welcome email");
    }
    return console.log("Welcome Email sent successfully", data);
  } catch (error) {
    console.log(error);
  }
};
