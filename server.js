const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;

app.use(bodyParser.json());

const reservations = [];

app.post("/makeReservation", (req, res) => {
  const { guestName, checkInDate, checkOutDate, email } = req.body;

  // Check if the room is available for reservation
  // Implement reservation logic here

  // Mocking a successful reservation
  const newReservation = { guestName, checkInDate, checkOutDate, email };
  reservations.push(newReservation);

  // Send confirmation email
  sendConfirmationEmail(email);

  res.status(200).json({
    message: "Reservation made successfully.",
    reservation: newReservation,
  });
});

app.get("/getReservations", (req, res) => {
  res.status(200).json(reservations);
});

function sendConfirmationEmail(email) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com", // replace with your Gmail email
      pass: "your-password", // replace with your Gmail password
    },
  });

  const mailOptions = {
    from: "your-email@gmail.com",
    to: email,
    subject: "Reservation Confirmation",
    text: "Your reservation has been confirmed. Thank you for choosing our service.",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Email sending error:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
