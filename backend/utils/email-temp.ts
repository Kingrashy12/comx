export const OtpTemp = (name: string, code: string) => `
  <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
  <img src="https://res.cloudinary.com/dv4mozbaz/image/upload/v1740137099/jpqd3kask5xbom4e4ecu.png" />
    <h2 style="color: #333;">Hello, ${name} 👋</h2>
    <p style="color: #555; font-size: 16px;">Your verification code is:</p>
    <div style="
      display: inline-block;
      font-size: 24px;
      font-weight: bold;
      color: #fff;
      background-color: #D71E0E;
      padding: 10px 20px;
      border-radius: 8px;
      letter-spacing: 3px;
    ">
      ${code}
    </div>
    <p style="color: #777; font-size: 14px; margin-top: 15px;">
      This code will expire in 10 minutes. If you did not request this, please ignore this email.
    </p>
  </div>
`;

export const PasswordChangeTemp = (name: string) => `
  <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
    <img src="https://res.cloudinary.com/dv4mozbaz/image/upload/v1740137099/jpqd3kask5xbom4e4ecu.png" />
    <h2 style="color: #333;">Hello, ${name} 👋</h2>
    <p style="color: #555; font-size: 16px;">
      Your password has been successfully changed.
    </p>
    <p style="color: #777; font-size: 14px; margin-top: 15px;">
      If you did not make this change, please <a href="mailto:raphealchizitere@gmail.com" style="color: #D71E0E; text-decoration: none; font-weight: bold;">contact support</a> immediately.
    </p>
    <p style="color: #555; font-size: 16px; margin-top: 20px;">
      Stay secure, <br /> ComX Team
    </p>
  </div>
`;
