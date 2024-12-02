'use client'

import { ChangeEvent, useState } from "react"
import useGlobalStore from "@/store/globalStore"


const Profile = () => {

const {user} = useGlobalStore()

const [userData, setUserData] = useState({
    name: user?.name,
    lastName: user?.lastName,
    gender: "",
    phone: "",
    age: "",
    email: user?.email,
    workSocial: "",
    idWorkSocial: ""
})

const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    const newUserData = {...userData, [name]: value};
    setUserData(newUserData)
}

const handleSubmit = async (event: { preventDefault: () => void }) => {
    event?.preventDefault()

    try {
        alert ("Cambio simulado")
    } catch (error) {
        console.log("Error");
        
    }
}


    return (
       <form onSubmit={handleSubmit} className="flex justify-center flex-col space-y-5 w-full  mx-auto">
        <div className="flex mx-auto space-x-12">
            <div className="flex flex-col">
            <label className="  block text-start text-base font-medium text-[#07074D]" htmlFor="name">Nombre</label>
            <input onChange={handleChange} value={userData.name}  className="mx-auto rounded-full border border-borderInput/50 bg-white py-2 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md" type="text" />
            </div>

            <div className="flex flex-col">
            <label className="block text-start text-base font-medium text-[#07074D]" htmlFor="name">Apellido</label>
            <input onChange={handleChange} value={userData.lastName} className="mx-auto rounded-full border border-borderInput/50 bg-white py-2 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md" type="text" />
            </div> 
        </div>

        <div className="flex mx-auto space-x-12">
            <div className="flex flex-col">
            <label className=" block text-start text-base font-medium text-[#07074D]" htmlFor="name">Sexo</label>
            <input onChange={handleChange}  className="mx-auto rounded-full border border-borderInput/50 bg-white py-2 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md" type="text" />
            </div>

            <div className="flex flex-col">
            <label className="block text-start text-base font-medium text-[#07074D]" htmlFor="name">Telefono</label>
            <input onChange={handleChange}  className="mx-auto rounded-full border border-borderInput/50 bg-white py-2 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md" type="text" />
            </div> 
        </div>

        <div className="flex mx-auto space-x-12">
            <div className="flex flex-col">
            <label className=" block text-start text-base font-medium text-[#07074D]" htmlFor="name">Edad</label>
            <input onChange={handleChange}  className="mx-auto rounded-full border border-borderInput/50 bg-white py-2 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md" type="text" />
            </div>

            <div className="flex flex-col">
            <label className="block text-start text-base font-medium text-[#07074D]" htmlFor="name">Email</label>
            <input onChange={handleChange} value={userData?.email}  className="mx-auto rounded-full border border-borderInput/50 bg-white py-2 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md" type="text" />
            </div> 
        </div>

        <div className="flex mx-auto space-x-12">
            <div className="flex flex-col">
            <label className=" block text-start text-base font-medium text-[#07074D]" htmlFor="name">Obra social</label>
            <input onChange={handleChange}  className="mx-auto rounded-full border border-borderInput/50 bg-white py-2 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md" type="text" />
            </div>

            <div className="flex flex-col">
            <label className="block text-start text-base font-medium text-[#07074D]" htmlFor="name">Numero de Afiliación</label>
            <input onChange={handleChange} className="mx-auto rounded-full border border-borderInput/50 bg-white py-2 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md" type="text" />
            </div> 
        </div>

        <div className="flex mx-auto space-x-12">
             

            <div className="flex flex-col">
            <button className="px-12 py-2 bg-primary text-white rounded-full hover:bg-gray-400 transition">Guardar Cambios</button>
            </div> 
        </div>

       </form>
    ) 
}

export default Profile