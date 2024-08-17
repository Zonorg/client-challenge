import { useState } from "react";

import { FilterInputProps } from "@/types";

export default function FilterInput({ data, filterKeys, onFilter, placeholder }: FilterInputProps) {
  const [filterText, setFilterText] = useState("");

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setFilterText(text);

    const filteredData = data.filter((item) => {
      return filterKeys.some((key) => {
        return item[key].toLowerCase().includes(text.toLowerCase());
      });
    });
    onFilter(filteredData);
  };

  return (
    <input
      type="text"
      value={filterText}
      onChange={handleFilterChange}
      placeholder={placeholder || "Buscar..."}
      className="w-full p-2 border border-gray-300 rounded mb-4"
    />
  );
}
