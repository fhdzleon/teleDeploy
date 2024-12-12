import Image from "next/image";
import React from "react";

interface Informacion {
  rol: string;
  name: string;
  name2: string;
  photo: string;
  photo2: string;
}

const People = ({ rol, name, name2, photo, photo2 }: Informacion) => {
  return (
    <>
      <h4 className="text-2xl text-white font-medium mb-8 text-center whitespace-nowrap">
        {rol}
      </h4>
      <div className="h-20 w-20   bg-white rounded-full flex justify-center items-center overflow-hidden relative transition-all">
        <Image
          className="object-cover"
          src={`/nosotros/${photo}.png`}
          alt={photo}
          fill
        />
      </div>
      <p className="text-white text-lg text-center whitespace-nowrap">{name}</p>

      <div className="h-20 w-20   bg-white rounded-full flex justify-center items-center mt-8 overflow-hidden relative">
        <Image
          className="object-cover"
          src={`/nosotros/${photo2}.png`}
          alt={photo2}
          fill
        />
      </div>
      <p className="text-white text-lg text-center whitespace-nowrap">{name2}</p>
    </>
  );
};

export default People;
