"use client";

import { ChangeEvent, useState } from "react";
import useGlobalStore from "@/store/globalStore";

const Profile = () => {
  const { user } = useGlobalStore();

  const [userData, setUserData] = useState({
    name: user?.name,
    lastName: user?.lastName,
    gender: user?.gender,
    phone: user?.phone,
    age: "",
    email: user?.email,
    workSocial: user?.healthcareSystem,
    idWorkSocial: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const newUserData = { ...userData, [name]: value };
    setUserData(newUserData);
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event?.preventDefault();

    try {
      alert("Cambio simulado");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      console.log("Error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center flex-col space-y-5 w-full  mx-auto"
    >
      <div className="flex mx-auto space-x-12">
        <div className="flex flex-col">
          <label
            className="  block text-start text-base font-medium text-[#07074D]"
            htmlFor="name"
          >
            Nombre
          </label>
          <input
            onChange={handleChange}
            value={userData.name}
            className="mx-auto rounded-full border border-borderInput/50 bg-white py-2 px-6 text-base font-medium text-textColor text-opacity-70 outline-none focus:border-[#4a41fe] focus:shadow-md"
            type="text"
          />
        </div>

        <div className="flex flex-col">
          <label
            className="block text-start text-base font-medium text-[#07074D]"
            htmlFor="name"
          >
            Apellido
          </label>
          <input
            onChange={handleChange}
            value={userData.lastName}
            className="mx-auto rounded-full border border-borderInput/50 bg-white py-2 px-6 text-base font-medium text-textColor text-opacity-70 outline-none focus:border-[#4a41fe] focus:shadow-md"
            type="text"
          />
        </div>
      </div>

      <div className="flex mx-auto space-x-12">
        <div className="flex flex-col">
          <label
            className=" block text-start text-base font-medium text-[#07074D]"
            htmlFor="name"
          >
            Sexo
          </label>
          <input
            onChange={handleChange}
            value={userData.gender}
            className="mx-auto rounded-full border border-borderInput/50 bg-white py-2 px-6 text-base font-medium text-textColor text-opacity-70 outline-none focus:border-[#4a41fe] focus:shadow-md"
            type="text"
          />
        </div>

        <div className="flex flex-col">
          <label
            className="block text-start text-base font-medium text-[#07074D]"
            htmlFor="phone"
          >
            Telefono
          </label>
          <input
            onChange={handleChange}
            value={userData.phone}
            className="mx-auto rounded-full border border-borderInput/50 bg-white py-2 px-6 text-base font-medium text-textColor text-opacity-70 outline-none focus:border-[#4a41fe] focus:shadow-md"
            type="text"
          />
        </div>
      </div>

      <div className="flex mx-auto space-x-12">
        <div className="flex flex-col">
          <label
            className=" block text-start text-base font-medium text-[#07074D]"
            htmlFor="age"
          >
            Edad
          </label>
          <input
            onChange={handleChange}
            className="mx-auto rounded-full border border-borderInput/50 bg-white py-2 px-6 text-base font-medium text-textColor text-opacity-70 outline-none focus:border-[#4a41fe] focus:shadow-md"
            type="text"
          />
        </div>

        <div className="flex flex-col">
          <label
            className="block text-start text-base font-medium text-[#07074D]"
            htmlFor="email"
          >
            Email
          </label>
          <input
            onChange={handleChange}
            value={userData?.email}
            className="mx-auto rounded-full border border-borderInput/50 bg-white py-2 px-6 text-base font-medium text-textColor text-opacity-70 outline-none focus:border-[#4a41fe] focus:shadow-md"
            type="text"
          />
        </div>
      </div>

      <div className="flex mx-auto space-x-12">
        <div className="flex flex-col">
          <label
            className=" block text-start text-base font-medium text-[#07074D]"
            htmlFor="workSocial"
          >
            Obra social
          </label>
          <input
            onChange={handleChange}
            value={userData.workSocial}
            className="mx-auto rounded-full border border-borderInput/50 bg-white py-2 px-6 text-base font-medium text-textColor text-opacity-70 outline-none focus:border-[#4a41fe] focus:shadow-md"
            type="text"
          />
        </div>

        <div className="flex flex-col">
          <label
            className="block text-start text-base font-medium text-[#07074D]"
            htmlFor="name"
          >
            Numero de Afiliación
          </label>
          <input
            onChange={handleChange}
            className="mx-auto rounded-full border border-borderInput/50 bg-white py-2 px-6 text-base font-medium text-textColor text-opacity-70 outline-none focus:border-[#4a41fe] focus:shadow-md"
            type="text"
          />
        </div>
      </div>

      <div className="flex justify-end  space-x-12">
        <div className="flex flex-col mt-6">
          <button className="px-12 py-2 bg-secundary text-primary font-semibold rounded-full hover:bg-gray-400 transition">
            Guardar Cambios
          </button>
        </div>
      </div>
    </form>
  );
};

export default Profile;
