// app/api/send-rsvp/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, attending, guests, dietaryRestrictions, message } =
      data;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD, // use Gmail app password
      },
    });

    await transporter.sendMail({
      from: `"Wedding RSVP" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `Wedding RSVP - ${name}`,
      text: `
Name: ${name}
Email: ${email}
Attending: ${attending}
Number of Guests: ${guests}
Dietary Restrictions: ${dietaryRestrictions || "None"}
Message: ${message || "None"}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send RSVP" }, { status: 500 });
  }
}
