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
      <h4 className="text-2xl text-white font-medium mb-8 text-center text-nowrap">
        {rol}
      </h4>
      <div className="h-20 w-20 bg-white rounded-full flex justify-center items-center overflow-hidden">
        <Image
          className="rounded-full"
          src={`/nosotros/${photo}.png`}
          alt={photo}
          width={100}
          height={100}
        />
      </div>
      <p className="text-white text-lg text-center text-nowrap">{name}</p>

      <div className="h-20 w-20 bg-white rounded-full flex justify-center items-center mt-8 overflow-hidden">
        <Image
          className="rounded-full"
          src={`/nosotros/${photo2}.png`}
          alt={photo2}
          height={100}
          width={100}
        />
      </div>
      <p className="text-white text-lg text-center text-nowrap">{name2}</p>
    </>
  );
};

export default People;
