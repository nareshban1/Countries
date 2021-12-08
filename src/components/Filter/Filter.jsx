import { SelectDropdown } from "./FilterStyles";
import { useState, useEffect } from "react";
const options = [
  {
    id: 1,
    name: "Africa",
  },
  {
    id: 2,
    name: "Americas",
  },
  {
    id: 3,
    name: "Asia",
  },
  {
    id: 4,
    name: "Europe",
  },
  {
    id: 5,
    name: "Oceania",
  },
];

const Filter = ({ setUrl }) => {
  const [region, setRegion] = useState("");

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (region?.length) {
        setUrl(`https://restcountries.com/v2/region/${region}`);
      } else {
        setUrl("https://restcountries.com/v2/all");
      }
    }

    return () => {
      mounted = false;
    };
  }, [region]);

  return (
    <SelectDropdown
      clearable
      options={options}
      values={[]}
      onChange={(values) => setRegion(values[0]?.name)}
      placeholder="Filter by Region"
      labelField="name"
      valueField="name"
    />
  );
};

export default Filter;
