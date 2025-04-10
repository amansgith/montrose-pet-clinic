import nodemailer from "nodemailer";

export async function POST(req) {
    const { formData} = await req.json();
    // Create a transporter for sending the email

    // transporter of the email
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASS,
        },
    })

    //email options
    const mailoptions = {
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: "New Medical File Transfer Request",
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
        <h2 style="color: #1E4DB7; text-align: center;">New Medical File Transfer Request</h2>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>Last Name:</strong> ${formData.lastName}</p>
        </div>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>First Name:</strong> ${formData.firstName}</p>
        </div>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>Phone:</strong> ${formData.phoneNumber}</p>
        </div>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>Address:</strong> ${formData.address}</p>
        </div>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>Name of Pet(s):</strong> ${formData.petNames}</p>
        </div>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>Sending Clinic Name (FROM):</strong> ${formData.sendingClinic}</p>
        </div>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>Receiving Clinic Name (TO):</strong> ${formData.receivingClinic}</p>
        </div>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>Signature of verifying person:</strong> ${formData.signature}</p>
        </div>
        <div style="padding: 10px 0; border-bottom: 1px solid #ddd;">
          <p style="margin: 0; color: #555;"><strong>Date of Request (mm/dd/yyyy):</strong> ${formData.date}</p>
        </div>
      </div>
        `,
    };

    try {
        transporter.sendMail(mailoptions);
        return new Response("Email sent successfully", { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response('Error sending email', { status: 500 });
    }
}