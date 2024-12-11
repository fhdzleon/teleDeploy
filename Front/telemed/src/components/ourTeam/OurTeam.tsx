import React from "react";
import People from "./People";

const OurTeam = () => {
  return (
    <div className="md:flex justify-center w-full hidden">
      <div className="bg-primary flex flex-col w-full p-8">
        <h2 className="text-2xl font-bold text-white pb-8 ">Nuestro Equipo:</h2>
        <div className="flex space-x-60">
          <div className="flex flex-col p-4 items-center justify-center">
            <People rol="UX/UI" name="Magalí Silva" name2="Maria Paz" photo="magalis" photo2="maria" />
          </div>
          <div className="flex flex-col p-4 items-center justify-center">
            <People rol="Backend" name="Dmitri Jrapach" name2="Agustin Ibarra" photo="dmitri" photo2="agus" />
          </div>
          <div className="flex flex-col p-4 items-center justify-center">
            <People rol="Frontend" name="Felipe Hernández" name2="José Garces" photo="felipe" photo2="jose" />
          </div>
          <div className="flex flex-col p-4 items-center justify-center">
            <People rol="QA Tester Manual" name="Cynthia Mariel" name2="Erika Escalante" photo="cynthia" photo2="cynthia" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

// <div className="flex justify-center min-w-screen w-full">
//   <div className="bg-primary grid grid-cols-4 gap-4 w-full p-4">
//     <div className="h-20 w-20 bg-white  rounded-full">
//       <h3></h3>
//     </div>
//     <div className="h-20 w-20 bg-white  rounded-full">
//       <h3>2</h3>
//     </div>
//     <div className="h-20 w-20 bg-white  rounded-full">
//       <h3>3</h3>
//     </div>
//     <div>
//       <h3>4</h3>
//     </div>
//     <div>
//       <h3>5</h3>
//     </div>
//     <div>
//       <h3>6</h3>
//     </div>
//     <div>
//       <h3>7</h3>
//     </div>
//     <div>
//       <h3>8</h3>
//     </div>
//   </div>
// </div>
