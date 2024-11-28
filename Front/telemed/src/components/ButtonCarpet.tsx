import Image from 'next/image'
import React from 'react'
import { buttonInformationProps } from '../interfaces/interfaces';

const ButtonCarpet = ({text}: buttonInformationProps ) => {
    // Agrega mas elementos al componente si los necesitas como cambiar clases y asi
  return (
    <div className="relative mb-[-15px] z-20">
        <span className="absolute left-10 top-2 flex items-center justify-center text-black font-medium">
          {text}
        </span>
        <Image
          src={"/images/buttonRaro.png"}
          alt="Boton"
          width={200}
          height={200}
          className="block"
          priority
        />
      </div>
  )
}

export default ButtonCarpet