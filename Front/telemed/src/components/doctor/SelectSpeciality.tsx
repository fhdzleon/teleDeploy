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
  const { setSelectedValue, selectedValue } = useGlobalStore();

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <Select value={selectedValue} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Seleccione una especialidad" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Especialidades</SelectLabel>
          <SelectItem value="cardiologia">Cardiologia</SelectItem>
          <SelectItem value="dermatologia">Dermatologia</SelectItem>
          <SelectItem value="nutricion">nutricion</SelectItem>
          <SelectItem value="psicologia">psicologia</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectSpeciality;
