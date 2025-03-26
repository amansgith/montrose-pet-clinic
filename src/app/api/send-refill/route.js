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
    subject: 'New Medication Refill Request',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
        <h2 style="color: #333; text-align: center;">New Medication Refill Request</h2>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>Last Name:</strong> ${formData.lastName}</p>
        </div>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>First Name:</strong> ${formData.firstName}</p>
        </div>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>Cell Phone:</strong> ${formData.cellPhone}</p>
        </div>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>Pet Name:</strong> ${formData.petName}</p>
        </div>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>Animal:</strong> ${formData.animal}</p>
          ${formData.animal === "Other" ? `<p style="margin: 0; color: #555;"><strong>Specify Animal:</strong> ${formData.otherAnimal}</p>` : ""}
        </div>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>Age:</strong> ${formData.age}</p>
        </div>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>Sex:</strong> ${formData.sex}</p>
        </div>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>Medication Details:</strong> ${formData.medicationDetails}</p>
        </div>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>Quantity Remaining:</strong> ${formData.quantityRemaining}</p>
        </div>
        <div style="padding: 10px 0;">
          <p style="margin: 0; color: #555;"><strong>Contact Number for Pickup:</strong> ${formData.contactNumber}</p>
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