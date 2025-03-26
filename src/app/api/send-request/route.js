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
        to: 'amankhancompq2002@gmail.com',
        subject: 'New Appointment Request',
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
        <h2 style="color: #333; text-align: center;">New Appointment Request</h2>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>Last Name:</strong> ${formData.lastName}</p>
        </div>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>First Name:</strong> ${formData.firstName}</p>
        </div>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>Address:</strong> ${formData.address}</p>
        </div>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>Postal Code:</strong> ${formData.postalCode}</p>
        </div>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>Home Phone:</strong> ${formData.homePhone}</p>
        </div>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>Cell Phone:</strong> ${formData.cellPhone}</p>
        </div>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>Email:</strong> ${formData.email}</p>
        </div>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>Pet 1 Name:</strong> ${formData.pet1Name}</p>
          <p style="margin: 0; color: #555;"><strong>Animal 1:</strong> ${formData.animal1}</p>
          <p style="margin: 0; color: #555;"><strong>Breed:</strong> ${formData.animal1Breed}</p>
          <p style="margin: 0; color: #555;"><strong>Sex:</strong> ${formData.animal1Sex}</p>
          <p style="margin: 0; color: #555;"><strong>DOB:</strong> ${formData.animal1dob}</p>
        </div>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>Pet 2 Name:</strong> ${formData.pet2Name}</p>
          <p style="margin: 0; color: #555;"><strong>Animal 2:</strong> ${formData.animal2}</p>
          <p style="margin: 0; color: #555;"><strong>Breed:</strong> ${formData.animal2Breed}</p>
          <p style="margin: 0; color: #555;"><strong>Sex:</strong> ${formData.animal2Sex}</p>
          <p style="margin: 0; color: #555;"><strong>DOB:</strong> ${formData.animal2dob}</p>
        </div>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>How did you hear about us:</strong> ${formData.heardAboutUs}</p>
        </div>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>Appointment Date:</strong> ${formData.appointmentDate}</p>
          <p style="margin: 0; color: #555;"><strong>Appointment Time:</strong> ${formData.appointmentTime}</p>
        </div>
        <div style="padding: 10px 0;">
          <p style="margin: 0; color: #555;"><strong>Purpose of Appointment:</strong></p>
          <p style="margin: 0; color: #555; padding: 10px; background-color: #fff; border-radius: 5px;">${formData.purpose}</p>
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