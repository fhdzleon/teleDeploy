
export default function Hero() {
  return (
    <section style={{backgroundImage: `url('images/doctorch.jpg')`, backgroundSize: "cover", backgroundPosition:"center"  }} className="bg-gray-100 min-h-[600px] flex flex-col justify-end items-end px-4 py-20">
      <div className="flex flex-col max-w-3xl">
        <div className="flex-col float-right ">
          <h1 className="text-4xl md:text-5xl font-normal text-black mb-6 leading-tight">
            Tu salud en buenas manos, estés donde estés.
          </h1>
          <p className="text-xl md:text-2xl  text-gray-800 leading-relaxed">
            Conéctate por videollamada con nuestros especialistas.
          </p>
        </div>
      </div>
    </section>
  );
}
