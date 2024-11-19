
export default function Hero() {
  return (
    //  background-image: linear-gradient(rgba(255, 0, 0, 0.5), rgba(0, 0, 255, 0.5)), url('tu-imagen.jpg'
    <section style={{backgroundImage:  `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 255, 0.5)), url('images/laptopM.jpg')`, backgroundSize: "cover", backgroundPosition:"center"  }} className="bg-gray-100 min-h-[600px] flex flex-col justify-end items-end px-4 py-20">
      <div className="flex flex-col max-w-3xl">
        <div className="flex-col float-right ">
          <h1 className="text-4xl md:text-5xl text-center md:text-start font-normal text-white mb-6 leading-tight">
            Tu salud en buenas manos, estés donde estés.
          </h1>
          <p className="text-xl md:text-2xl text-center md:text-start  text-white leading-relaxed">
            Conéctate por videollamada con nuestros especialistas.
          </p>
        </div>
      </div>
    </section>
  );
}
