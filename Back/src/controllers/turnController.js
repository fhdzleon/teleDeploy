const Shift = require("../models/Turn");
const mongoose = require("mongoose");

const reserveTurn = async (req, res) => {
  try {
    const { idTurno } = req.body; 
    const { id } = req.params.id.replace(':',''); 
    const idShift = new mongoose.Types.ObjectId(idTurno);
    const idPatient = new mongoose.Types.ObjectId(id);
    const result = await Shift.findOneAndUpdate({_id:idShift,disponible:true},{disponible:false,patient:idPatient},{new:true});
    if(result){
      res.status(201).json(result);
    }
    else{
      res.status(400).json({error:'The turn is already reserved!'});
    }
    res.send();
  } catch (error) {
    console.error("Error al reservar el turno:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

module.exports = {
  reserveTurn,
};
