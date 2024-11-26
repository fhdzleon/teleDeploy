const Turn = require("../models/Turn");

const reserveTurn = async (req, res) => {
  try {
    const { idTurno } = req.body;
    const userId = req.user.id; // ID del usuario autenticado extraído del token

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

    // Actualizar el turno
    turn.disponible = false;
    turn.patient = userId;
    await turn.save();

    res.status(200).json({ message: "Turno reservado con éxito.", turn });
  } catch (error) {
    console.error("Error al reservar el turno:", error);
    res.status(500).json({ message: "Error al reservar el turno.", error });
  }
};

module.exports = {
  reserveTurn,
};
