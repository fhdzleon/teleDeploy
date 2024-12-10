import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-11/12 md:w-3/4 lg:w-1/2 p-6 rounded-lg shadow-lg overflow-y-auto max-h-[90vh]">
        <button className="text-red-500 font-bold text-lg float-right">
          X
        </button>
        <h2 className="text-2xl font-bold mb-4">
          Términos y Condiciones de Telemed
        </h2>
        <div className="text-sm leading-relaxed">
          <section className="mb-4">
            <p>
              Telemed ofrece una plataforma digital para coordinar consultas
              médicas virtuales mediante videollamadas realizadas a través de
              enlaces de Google Meet enviados por email. Los usuarios deben
              asegurarse de contar con una conexión a internet estable y un
              dispositivo compatible para garantizar el correcto desarrollo de
              las consultas. Este servicio está disponible en el territorio de
              la República Argentina y puede ser utilizado por aquellos usuarios
              que residan en zonas habilitadas.
            </p>
            <p>
              El uso de Telemed está destinado exclusivamente a consultas de
              baja complejidad y no es un sustituto de la atención médica de
              emergencia o consultas presenciales cuando sea necesario.
            </p>
          </section>

          <section className="mb-4">
            <h3 className="font-semibold">
              2. Registro y Responsabilidad del Usuario
            </h3>
            <p>
              Para acceder al servicio, los usuarios deben registrarse
              proporcionando información personal veraz, completa y actualizada.
              Si la información proporcionada resulta errónea o incompleta,
              Telemed podrá cancelar la cuenta sin responsabilidad ni
              resarcimiento. El usuario es responsable de garantizar la
              confidencialidad de sus credenciales de acceso y de cualquier
              actividad realizada desde su cuenta.
            </p>
          </section>

          <section className="mb-4">
            <h3 className="font-semibold">3. Limitaciones del Servicio</h3>
            <p>
              El servicio no está diseñado para atender situaciones de
              emergencia ni condiciones médicas graves que requieran atención
              inmediata. Entre los casos que no serán atendidos a través de la
              plataforma se encuentran:
            </p>
            <ul className="list-disc ml-6">
              <li>Dolor o presión en el pecho.</li>
              <li>Hemorragias significativas.</li>
              <li>Pérdida de la conciencia.</li>
              <li>Lesiones graves o fracturas.</li>
              <li>Quemaduras moderadas a severas.</li>
              <li>Convulsiones/Epilepsia.</li>
              <li>Dificultad para respirar.</li>
              <li>
                Administración de medicamentos controlados (narcóticos,
                opioides, etc.).
              </li>
            </ul>
            <p>
              Si experimentas alguno de estos síntomas, acude inmediatamente a
              una sala de emergencias.
            </p>
          </section>

          <section className="mb-4">
            <h3 className="font-semibold">
              4. Condiciones de Uso y Exoneración de Responsabilidad
            </h3>
            <p>
              Los médicos que ofrecen consultas a través de Telemed son
              profesionales independientes y no empleados de la plataforma. La
              empresa no se hace responsable de la calidad de los diagnósticos,
              tratamientos o recomendaciones proporcionados por los médicos, ni
              de las consecuencias que puedan derivarse del uso del servicio.
            </p>
            <p>
              Telemed no garantiza la ausencia de interrupciones, errores
              técnicos, o defectos en el servicio. Tampoco asume responsabilidad
              por daños directos, indirectos, incidentales o consecuentes
              derivados del uso del servicio, en la medida permitida por la
              legislación aplicable.
            </p>
          </section>

          <section className="mb-4">
            <h3 className="font-semibold">5. Garantías Limitadas</h3>
            <p>
              Telemed no garantiza que las respuestas de los profesionales
              médicos sean exhaustivas o adecuadas para todos los usuarios. El
              servicio no incluye la emisión de certificados médicos o recetas
              de medicamentos controlados.
            </p>
          </section>

          <section className="mb-4">
            <h3 className="font-semibold">
              6. Consultas Médicas de Baja Complejidad
            </h3>
            <p>
              El servicio está diseñado para atender patologías de baja
              complejidad, tales como:
            </p>
            <ul className="list-disc ml-6">
              <li>Resfriados, sinusitis y gripes.</li>
              <li>Erupciones cutáneas.</li>
              <li>Alergias y asma.</li>
              <li>Infecciones urinarias.</li>
              <li>Dolor de garganta.</li>
              <li>
                Problemas gastrointestinales leves como vómitos o diarreas.
              </li>
              <li>Consejería para dejar de fumar.</li>
            </ul>
          </section>

          <section className="mb-4">
            <h3 className="font-semibold">
              7. Modificaciones y Finalización del Servicio
            </h3>
            <p>
              Telemed se reserva el derecho de modificar, suspender o
              descontinuar cualquier parte del servicio en cualquier momento.
              Las modificaciones serán notificadas oportunamente.
            </p>
          </section>

          <section>
            <h3 className="font-semibold">8. Confidencialidad y Privacidad</h3>
            <p>
              La información personal y médica de los usuarios será tratada
              conforme a nuestra Política de Privacidad. No se compartirá
              información sin el consentimiento del usuario, salvo cuando sea
              requerido por ley.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
