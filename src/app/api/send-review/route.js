import nodemailer from 'nodemailer';

export async function POST(req) {
    const { formData } = await req.json();

    // Create a transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASS,
        },
    });

    // Email options
    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: 'New Review Received',
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
        <h2 style="color: #333; text-align: center;">New Review Received</h2>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>Name:</strong> ${formData.name}</p>
        </div>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>Email:</strong> ${formData.email}</p>
        </div>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>Rating:</strong> ${formData.rating}</p>
        </div>
        <div style="padding: 10px 0;">
          <p style="margin: 0; color: #555;"><strong>Message:</strong>
            <p style="margin: 0; color: #555; padding: 10px; background-color: #fff; border-radius: 5px;">${formData.message}</p>
          </p>
        </div>
      </div>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response('Email sent successfully', { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response('Error sending email', { status: 500 });
    }
}