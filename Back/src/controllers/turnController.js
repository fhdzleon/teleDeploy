const Shift = require("../models/Turn");
const mongoose = require("mongoose");
const User = require("../models/User");
const nodemailer = require("nodemailer");

const reserveTurn = async (req, res) => {
  try {
    const { idTurno } = req.body; 
    const { id } = req.params; 

    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log("ID de paciente no válido:", id);
      return res.status(400).json({ error: "ID de paciente no válido." });
    } else {
      console.log("ID de paciente válido:", id);
    }

    if (!mongoose.Types.ObjectId.isValid(idTurno)) {
      console.log("ID de turno no válido:", idTurno);
      return res.status(400).json({ error: "ID de turno no válido." });
    } else {
      console.log("ID de turno válido:", idTurno);
    }

    const result = await Shift.findOneAndUpdate(
      { _id: idTurno, disponible: true },
      { disponible: false, patient: id }, 
      { new: true }
    );

    if (result) {
      console.log("Turno reservado exitosamente:", result);

      const patient = await User.findById(id);
      if (patient) {
        console.log("Paciente encontrado:", patient);

        const meetLink = `https://meet.google.com/fao-zdhc-frq`;
        console.log('Enlace de Meet generado:', meetLink);

        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        transporter.verify((error, success) => {
          if (error) {
            console.error("Error en la verificación de nodemailer:", error);
          } else {
            console.log("Servidor de correo verificado correctamente.");
          }
        });

        const mailOptions = {
          from: '"Sistema de Turnos" <dmitrijrapach@gmail.com>',
          to: patient.email,
          subject: "Confirmación de Turno Reservado",
          html: `
            <p>Hola ${patient.name},</p>
            <p>Tu turno ha sido reservado con éxito.</p>
            <p><strong>Fecha:</strong> ${result.fecha.toDateString()}</p>
            <p><strong>Hora:</strong> ${result.hora}</p>
            <p><strong>Enlace de Meet:</strong> <a href="${meetLink}">${meetLink}</a></p>
            <p>Gracias por utilizar nuestro sistema.</p>
          `,
        };
        
        await transporter.sendMail(mailOptions)
          .then(info => {
            console.log("Correo enviado: ", info.response);
          })
          .catch(error => {
            console.error("Error al enviar el correo:", error.message);
          });
      } else {
        console.error("Paciente no encontrado con el ID:", id);
        return res.status(404).json({ error: "Paciente no encontrado." });
      }

      res.status(201).json(result);
    } else {
      console.log("El turno ya está reservado o no disponible.");
      res.status(409).json({ error: 'El turno ya está reservado o no disponible.' });
    }
  } catch (error) {
    console.error("Error en la reserva de turno:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

module.exports = {
  reserveTurn,
};
