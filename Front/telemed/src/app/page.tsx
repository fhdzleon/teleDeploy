import Hero from "@/components/homepage/Hero";
import CardN from "../components/CardN";
import ObrasCarousel from "@/components/homepage/Carousel";
import FaqSection from "../components/homepage/FaqSection";
import FormH from "@/components/homepage/FormH";

export default function Home() {
  return (
    <>
      <Hero />
      <div>
        <h2
          id="nosotros"
          className="text-center text-4xl font-semibold text-gray-800 mb-5 leading-tight mt-5"
        >
          Nosotros
        </h2>
        <p className="text-xl text-[#050315] leading-relaxed text-center">
          En Telemed estamos comprometidos con hacer la atención médica
          accesible para todos
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center p-10 md:space-x-5 space-y-5 md:space-y-0">
          <CardN
            url="/images/today.png"
            title="Consulta médica a tu alcance"
            text="Programa tu videollamada con especialistas cualquier día del año, en el horario que prefieras."
          />
          <CardN
            url="/images/social.png"
            title="Equipo Multidisciplinario"
            text="Contamos con especialistas comprometidos con la excelencia médica y el bienestar de cada paciente."
          />
          <CardN
            url="/images/check.png"
            title="Innovación en Salud"
            text="Usamos tecnología avanzada para transformar el acceso a la salud, con altos estándares de seguridad."
          />
        </div>
        {/* obras sociales */}
        <section className="hidden md:block">
          <h2
            id="obras-sociales"
            className="text-center text-4xl font-semibold mb-8  text-gray-800 leading-tight"
          >
            Obras sociales
          </h2>
          <ObrasCarousel />
        </section>

        <FaqSection />
        <section
          id="contacto"
          className="text-center flex flex-col space-y-2 purple-light  "
        >
          <h2 className="text-4xl font-semibold my-5 ">Contáctanos</h2>

          <p className="text-[21px]">Escribenos y nos conectaremos a la brevedad</p>

          <p className="text-[18px]">Telemed@telemed.com</p>

          <p className="text-[18px]">(111)1111111 </p>
          <FormH />
        </section>
      </div>
    </>
  );
}
