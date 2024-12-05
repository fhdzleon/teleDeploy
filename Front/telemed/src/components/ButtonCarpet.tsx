import Image from 'next/image'
import React from 'react'
import { buttonInformationProps } from '../interfaces/interfaces';

const ButtonCarpet = ({text, estilos}: buttonInformationProps ) => {
    // Agrega mas elementos al componente si los necesitas como cambiar clases y asi
  return (
    <div className=''>
        <span className={`absolute font-extrabold ${estilos} text-black`}>
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