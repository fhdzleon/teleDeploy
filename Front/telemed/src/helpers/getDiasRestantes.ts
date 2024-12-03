const getDiasRestantes = (fechaISO: string): string => {
  const fechaCita = new Date(fechaISO);
  const fechaActual = new Date();

  fechaCita.setHours(0, 0, 0, 0);
  fechaActual.setHours(0, 0, 0, 0);

  const diferenciaTiempo = fechaCita.getTime() - fechaActual.getTime();
  const diasRestantes = Math.ceil(diferenciaTiempo / (1000 * 3600 * 24)); // Convertir de milisegundos a días

  if (diasRestantes < 0) {
    return "La cita ya pasó";
  } else if (diasRestantes === 0) {
    return "Hoy";
  } else {
    return `Faltan ${diasRestantes} días`;
  }
};

export default getDiasRestantes;
