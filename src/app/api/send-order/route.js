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
    subject: 'New Prescription Food Order',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
        <h2 style="color: #333; text-align: center;">New Prescription Food Order</h2>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>Last Name:</strong> ${formData.lastName}</p>
        </div>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>First Name:</strong> ${formData.firstName}</p>
        </div>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>Phone:</strong> ${formData.phone}</p>
        </div>
        <h3 style="color: #333; text-align: center; margin-top: 20px;">Pet Details</h3>
        ${formData.pets.map((pet, index) => `
          <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
            <p style="margin: 0; color: #555;"><strong>Pet ${index + 1} Name:</strong> ${pet.name}</p>
            <p style="margin: 0; color: #555;"><strong>Food:</strong> ${pet.food}</p>
            <p style="margin: 0; color: #555;"><strong>Bag Size:</strong> ${pet.bagSize}</p>
            <p style="margin: 0; color: #555;"><strong>Quantity:</strong> ${pet.quantity}</p>
            <p style="margin: 0; color: #555;"><strong>Days Left:</strong> ${pet.daysLeft}</p>
          </div>
        `).join('')}
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