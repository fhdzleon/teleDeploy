const HealthcareSystem = require("../models/HealthcareSystem");

const addHealthcareSystem = async (req, res) => {
  const { idSocialWork, socialWork, active } = req.body;

  try {
    // Crear nueva obra social
    const newSocialWork = new HealthcareSystem({
      idSocialWork,
      socialWork,
      active: active ?? true, // Si no envían el valor, se establece como `true` por defecto
    });

    const savedSocialWork = await newSocialWork.save();
    res.status(201).json({ message: "Healthcare system created", data: savedSocialWork });
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).json({ error: "Healthcare system already exists" });
    } else {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

module.exports = { addHealthcareSystem };
