**💬 Full-Stack Chat App**

**✨ Overview**

A full-stack chat application with JWT authentication, real-time messaging via Socket.io, email notifications, and image uploads. Includes online/offline indicators, a modern UI built with Tailwind CSS + DaisyUI, and state management via Zustand.

**🚀 Features**

🔐 Custom JWT authentication
⚡ Real-time chat with Socket.io
🟢 Online/offline presence indicators
✉️ Welcome & notification emails (Resend)
🖼️ Image uploads (Cloudinary)
🧰 REST API with Express + MongoDB
🎨 Responsive UI with React + Tailwind CSS
🚦 Rate limiting powered by Arcjet
☁️ Easy free-tier deployment (Sevalla, Render, etc.)
🧩 Tech Stack

**Frontend**: React, Tailwind CSS, DaisyUI, Zustand
**Backend**: Node.js, Express, MongoDB, Socket.io
**Utilities**: Cloudinary, Resend, Arcjet

**⚙️ Setup & Installation**

1️⃣ Clone the repository
git clone https://github.com/yourusername/chat-app.git
cd chat-app

2️⃣ Configure environment variables

Create a .env file inside /backend and add:

PORT=3000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret

RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=your_email_from_address
EMAIL_FROM_NAME=your_email_from_name

CLIENT_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development

3️⃣ Run the backend
cd backend
npm install
npm run dev

4️⃣ Run the frontend
cd ../frontend
npm install
npm run dev

**🧠 Demo**
💻 Coming soon — live demo link here!

**🧑‍💻 Author**
Avvi Kumar
