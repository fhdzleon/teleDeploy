"use client";
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
  const { selectedValue, setSelectedValue } = useGlobalStore();

  const handleChange = (value: string) => {
    setSelectedValue(value);
    console.log(value);
  };
  return (
    <Select value={selectedValue} onValueChange={handleChange}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Seleccione una especialidad" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Especialidades</SelectLabel>
          <SelectItem value="Odontólogia">Odontologia</SelectItem>
          <SelectItem value="Dermatologia">Dermatologia</SelectItem>
          <SelectItem value="Cardiologo">Cardiologo</SelectItem>
          <SelectItem value="Pediatra">Pediatra</SelectItem>
          <SelectItem value="ojologo">ojologo</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectSpeciality;
