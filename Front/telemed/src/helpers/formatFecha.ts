const formatFecha = (fechaISO: string): string => {
  const opciones: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  const fecha = new Date(fechaISO);

  return fecha
    .toLocaleDateString("es-ES", opciones)
    .replace(/^\w/, (c) => c.toUpperCase());
};

export default formatFecha;
