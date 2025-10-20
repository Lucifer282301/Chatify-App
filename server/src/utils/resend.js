import { Resend } from "resend";
import { ENV } from "./env.js";

if (!ENV.RESEND_API_KEY) {
  console.log("Provide RESEND_API_KEY is not defined in .env file");
}

export const resendClient = new Resend(ENV.RESEND_API_KEY);

export const sender = {
  name: ENV.EMAIL_FROM_NAME,
  email: ENV.EMAIL_FROM,
};
