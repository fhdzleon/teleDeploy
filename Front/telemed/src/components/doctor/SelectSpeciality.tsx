"use client";
// import { fetchMedicos } from "@/app/api/actions";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import useGlobalStore from "@/store/globalStore";
const SelectSpeciality = () => {
  const { setSelectedValue, selectedValue, setSelectedValueDoctor, setSelectedValueTime, setSelectedValueDate } = useGlobalStore();

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
    setSelectedValueDoctor("");
    setSelectedValueDate("");
    setSelectedValueTime("");
  };

  return (
    <Select value={selectedValue} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Seleccione una especialidad" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Especialidades</SelectLabel>
          <SelectItem value="cardiologia">Cardiología</SelectItem>
          <SelectItem value="dermatologia">Dermatología</SelectItem>
          <SelectItem value="nutricion">Nutrición</SelectItem>
          <SelectItem value="psicologia">Psicología</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectSpeciality;
