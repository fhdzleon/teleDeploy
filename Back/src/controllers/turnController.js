const Turn = require("../models/Turn");
const mongoose = require("mongoose");

const reserveTurn = async (req, res) => {
  try {
    const { idTurno } = req.body; // ID del turno desde el cuerpo de la solicitud
    const { id } = req.params; // ID del paciente desde los parámetros de la URL

    // Validar si el ID del paciente es un ObjectId válido
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "ID del paciente inválido." });
    }

    if (!idTurno) {
      return res.status(400).json({ message: "El idTurno es obligatorio." });
    }

    // Buscar el turno por su ID
    const turn = await Turn.findById(idTurno);
    if (!turn) {
      return res.status(404).json({ message: "El turno no existe." });
    }

    // Verificar si el turno ya está reservado
    if (!turn.disponible) {
      return res.status(400).json({ message: "El turno ya está reservado." });
    }

    // Actualizar el turno con el ID del paciente
    turn.disponible = false;
    turn.patient = id;
    await turn.save();

    res.status(200).json({ message: "Turno reservado con éxito.", turn });
  } catch (error) {
    console.error("Error al reservar el turno:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};



module.exports = {
  reserveTurn,
};
