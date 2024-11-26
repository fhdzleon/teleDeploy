import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gray-100 min-h-[600px] flex flex-col justify-end items-end px-4 py-20">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/images/laptopM.jpg"
          alt="Imagen de fondo"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Degradado */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 255, 0.5))`,
        }}
        className="absolute inset-0"
      ></div>
      {/* Contenido  */}
      <div className="relative z-10 flex flex-col max-w-3xl">
        <div className="flex-col float-right">
          <h1 className="text-4xl md:text-5xl text-center md:text-start font-normal text-white mb-6 leading-tight">
            Tu salud en buenas manos, estés donde estés.
          </h1>
          <p className="text-xl md:text-2xl text-center md:text-start text-white leading-relaxed">
            Conéctate por videollamada con nuestros especialistas.
          </p>
        </div>
      </div>
    </section>
  );
}
