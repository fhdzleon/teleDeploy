import Hero from "@/components/homepage/Hero";
import CardN from "../components/CardN";
import ObrasCarousel from "@/components/Carousel";
import FaqSection from "../components/FaqSection";

export default function Home() {
  return (
    <>
      <Hero />
      <div>
        <h2
          id="nosotros"
          className="text-center text-4xl font-medium text-gray-800 mb-5 leading-tight mt-5"
        >
          Nosotros
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed text-center">
          En Telemed estamos comprometidos con hacer la atención médica
          accesible para todos
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center p-10 md:space-x-5 space-y-5 md:space-y-0">
          <CardN
            title="Disponibilidad 24/7"
            text="Puedes consultar a un médico por videollamada a cualquier hora, todos los dias del año"
          />
          <CardN
            title="Disponibilidad 24/7"
            text="Puedes consultar a un médico por videollamada a cualquier hora, todos los dias del año"
          />
          <CardN
            title="Disponibilidad 24/7"
            text="Puedes consultar a un médico por videollamada a cualquier hora, todos los dias del año"
          />
        </div>
        {/* obras sociales */}
        <section>
          <ObrasCarousel />
        </section>

        <section>
          <FaqSection />
        </section>
      </div>
    </>
  );
}
