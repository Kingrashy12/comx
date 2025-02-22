import nodemailer from "nodemailer";

type SendMail = {
  to: string;
  subject: string;
  //   content: string;
  html: string;
};

export const sendMail = async ({ to, subject, html }: SendMail) => {
  try {
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      html: html,
    };

    const info = await transport.sendMail(mailOptions);
    console.log("✅ Email sent:", info.response);
    return info;
  } catch (error) {
    console.error("❌ Email sending failed:", error);

    throw new Error("Email sending failed");
  }
};
