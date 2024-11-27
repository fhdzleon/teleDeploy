'use client'
import WithAuthProtect from "@/helpers/WithAuth";
import { DoctorCard } from "@/components/doctor/DoctorCard";


const page = () => {
  const doctorExample = {
    name: "Dr. Fernandez",
    specialty: "Dermátologo",
    // rating: 4,
    // availableDays: [
    //   new Date(2024, 10, 18),
    //   new Date(2024, 10, 11),
    //   new Date(2024, 10, 16),
    //   new Date(2024, 10, 17),
    //   new Date(2024, 10, 10),
    //   new Date(2024, 10, 12),
    //   new Date(2024, 10, 15),
    // ],
  };

  return (
    <div className="mx-auto p-6 flex ">
      <DoctorCard {...doctorExample} />
    </div>
  );
};

export default WithAuthProtect(page);
