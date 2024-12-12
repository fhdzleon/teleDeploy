import React from "react";
import People from "./People";

const OurTeam = () => {
  return (
    <div className="hidden md:block w-full bg-primary">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-white mb-8 ml-24">Nuestro Equipo:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <People rol="UX/UI" name="Magalí Silva" name2="Maria Paz" photo="magalis" photo2="maria" />
          </div>
          <div className="flex flex-col items-center">
            <People rol="Backend" name="Dmitri Jrapach" name2="Agustin Ibarra" photo="dmitri" photo2="agus" />
          </div>
          <div className="flex flex-col items-center">
            <People rol="Frontend" name="Felipe Hernández" name2="José Garces" photo="felipe" photo2="jose" />
          </div>
          <div className="flex flex-col items-center">
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
