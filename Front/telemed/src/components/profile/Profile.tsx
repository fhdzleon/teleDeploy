"use client";

import { useState } from "react";
import useGlobalStore from "@/store/globalStore";
import { registerErrors, registerInputs } from "@/interfaces/interfaces";
import { validateEditionInputs } from "@/middlewares/validateEditionInputs";
import { useRouter } from "next/navigation";
import { PATHROUTES } from "@/helpers/pathroutes";

const Profile = () => {
  const { user, setUser } = useGlobalStore();

  const router = useRouter();

  const [userData, setUserData] = useState<registerErrors>({
    name: user?.name || "",
    lastName: user?.lastName || "",
    gender: user?.gender || "",
    phone: user?.phone || "",
    age: user?.age || "",
    email: user?.email || "",
    healthcareSystem: user?.healthcareSystem || "",
    idAfiliado: user?.idAfiliado || "",
  });

  const [errors, setErrors] = useState<registerErrors>({
    name: "",
    lastName: "",
    gender: "",
    phone: "",
    age: "",
    healthcareSystem: "",
    idAfiliado: "",
  });

  const [changedFields, setChangedFields] = useState<registerErrors>({});

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    const key = name as keyof registerInputs;

    setUserData((prev) => ({
      ...prev,
      [key]: value,
    }));

    setChangedFields((prev) => ({
      ...prev,
      [key]: value !== (userData[key] ?? ""), // Comparación segura con coalescencia nula
    }));

    const updatedErrors = validateEditionInputs({
      ...userData,
      [key]: value,
    } as registerInputs);

    setErrors(updatedErrors);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updatedFields = Object.keys(changedFields)
      .filter((key) => changedFields[key as keyof registerErrors])
      .reduce((acc, key) => {
        const typedKey = key as keyof registerInputs;
        acc[typedKey] = userData[typedKey];
        return acc;
      }, {} as Partial<registerInputs>);

    if (Object.keys(updatedFields).length === 0) {
      alert("No hay cambios para guardar");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/update/${user?.id}`,

        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedFields),
        }
      );

      if (!response.ok) {
        throw new Error("Error al actualizar los datos");
      }
      const updateUser = await response.json();

      setUser({ ...user, ...updateUser });

      alert("Datos actualizados correctamente");
      router.push(PATHROUTES.IN);
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error al intentar guardar los cambios");
    }
  };

  const isSaveDisabled =
    Object.values(changedFields).every((val) => !val) ||
    Object.values(errors).some((error) => error !== "");

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
            name="name"
            onChange={handleChange}
            value={userData.name}
            className={`mx-auto md:min-w-[250px]  rounded-xl border border-borderInput/50 bg-white py-2 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md ${
              userData.name !== user?.name
                ? "text-opacity-100"
                : "text-opacity-70"
            }`}
            type="text"
          />
          <p className="text-xs text-red-600">{errors.name}</p>
        </div>

        <div className="flex flex-col">
          <label
            className="block text-start text-base font-medium text-[#07074D]"
            htmlFor="lastName"
          >
            Apellido
          </label>
          <input
            name="lastName"
            onChange={handleChange}
            value={userData.lastName}
            className={`mx-auto md:min-w-[250px]  rounded-full border border-borderInput/50 bg-white py-2 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md  ${
              userData.lastName !== user?.lastName
                ? "text-opacity-100"
                : "text-opacity-70"
            }`}
            type="text"
          />
          <p className="text-xs text-red-600">{errors.lastName}</p>
        </div>
      </div>

      <div className="flex mx-auto space-x-12">
        <div className="flex flex-col">
          <label
            className=" block text-start text-base font-medium text-[#07074D]"
            htmlFor="gender"
          >
            Sexo
          </label>
          <select
            id="gender"
            value={userData.gender}
            onChange={handleChange}
            className={`w-full md:w-auto md:min-w-[250px]  rounded-full border border-borderInput/50 bg-white py-2 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md appearance-none ${
              userData.gender !== user?.gender
                ? "text-opacity-100"
                : "text-opacity-70"
            }`}
            name="gender"
            required
          >
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
          </select>
          <p className="text-xs text-red-600">{errors.gender}</p>
        </div>

        <div className="flex flex-col">
          <label
            className="block text-start text-base font-medium text-[#07074D]"
            htmlFor="phone"
          >
            Telefono
          </label>
          <input
            name="phone"
            onChange={handleChange}
            value={userData.phone}
            className={`mx-auto md:min-w-[250px]  rounded-full border border-borderInput/50 bg-white py-2 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md  ${
              userData.phone !== user?.phone
                ? "text-opacity-100"
                : "text-opacity-70"
            }`}
          />
          <p className="text-xs text-red-600">{errors.phone}</p>
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
            name="age"
            onChange={handleChange}
            value={userData?.age}
            className={`mx-auto md:min-w-[250px]  rounded-full border border-borderInput/50 bg-white py-2 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md  ${
              userData.age !== user?.age
                ? "text-opacity-100"
                : "text-opacity-70"
            }`}
            type="text"
          />
          <p className="text-xs text-red-600">{errors.age}</p>
        </div>

        <div className="flex flex-col">
          <label
            className="block text-start text-base font-medium text-[#07074D]"
            htmlFor="email"
          >
            Email
          </label>
          <input
            name="email"
            disabled
            onChange={handleChange}
            value={userData?.email}
            className={`mx-auto md:min-w-[250px]  rounded-full border border-borderInput/50 bg-white py-2 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md  ${
              userData.email !== user?.email
                ? "text-opacity-100"
                : "text-opacity-70"
            }`}
            type="text"
          />
        </div>
      </div>

      <div className="flex mx-auto space-x-12">
        <div className="flex flex-col">
          <label
            className=" block text-start text-base font-medium text-[#07074D]"
            htmlFor="healthcareSystem"
          >
            Obra social
          </label>
          <select
            id="healthcareSystem"
            value={userData.healthcareSystem}
            onChange={handleChange}
            className={`w-full md:w-auto md:min-w-[250px]  rounded-full border border-borderInput/50 bg-white py-2 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md appearance-none ${
              userData.healthcareSystem !== user?.healthcareSystem
                ? "text-opacity-100"
                : "text-opacity-70"
            }`}
            name="healthcareSystem"
            required
          >
            <option value="6744d95a6d87602e47fc2810">Osecac</option>
            <option value="6744d9766d87602e47fc2812 ">Prevencion salud</option>
            <option value="6744d9966d87602e47fc2814">Ospe</option>
            <option value="6744d9aa6d87602e47fc2816">Avalian</option>
            <option value="6744d9be6d87602e47fc2818">Osde</option>
            <option value="6744d9d16d87602e47fc281a">Osuthgra</option>
            <option value="6744d9e66d87602e47fc281c">Luis Pasteur</option>
          </select>
          <p className="text-xs text-red-600">{errors.healthcareSystem}</p>
        </div>

        <div className="flex flex-col">
          <label
            className="block text-start text-base font-medium text-[#07074D]"
            htmlFor="idAfiliado"
          >
            Numero de Afiliación
          </label>
          <input
            name="idAfiliado"
            onChange={handleChange}
            value={userData.idAfiliado}
            className={`mx-auto md:min-w-[250px]  rounded-full border border-borderInput/50 bg-white py-2 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md  ${
              userData.idAfiliado !== user?.idAfiliado
                ? "text-opacity-100"
                : "text-opacity-70"
            }`}
            type="text"
          />
          <p className="text-xs text-red-600">{errors.idAfiliado}</p>
        </div>
      </div>

      <div className="flex justify-end  space-x-12">
        <div className="flex flex-col mt-6">
          <button
            type="submit"
            disabled={isSaveDisabled}
            className={`px-12 py-2 font-semibold rounded-full transition ${
              isSaveDisabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-secundary text-primary hover:bg-gray-400"
            }`}
          >
            Guardar Cambios
          </button>
        </div>
      </div>
    </form>
  );
};

export default Profile;
