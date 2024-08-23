import React from "react";
import InputField from "../components/Input/InputField";
import DataContainer from "../components/DataContainer/DataContainer";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [regions, setRegions] = useState([]);
  const [subRegions, setSubRegions] = useState([]);
  const [inputFieldValues, setInputFieldValues] = useState({
    searchBarValue: "",
    selectedRegion: "",
    selectedSubRegion: "",
    sortBy: "",
  });

  const filterRegions = (data) => {
    const regions = [];
    data.forEach((country) => {
      const region = country.region;
      if (!regions.includes(region)) {
        regions.push(region);
      }
    });
    return regions;
  };

  const filterSubRegions = (region) => {
    const subRegions = data
      .filter((country) => country.region === region)
      .map(({ subregion }) => subregion)
      .reduce((acc, curr) => {
        if (!acc.includes(curr) && curr !== undefined) {
          acc.push(curr);
        }
        return acc;
      }, []);
    return subRegions;
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setError(false);
        setData(data);
        setRegions(filterRegions(data));
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  function handleInputFields(inputFields) {
    if (inputFields.selectedRegion !== "Regions") {
      setSubRegions(filterSubRegions(inputFields.selectedRegion));
    }
    const updatedInputFields = {
      ...inputFields,
      selectedRegion:
        inputFields.selectedRegion === "Regions"
          ? ""
          : inputFields.selectedRegion,
      selectedSubRegion:
        inputFields.selectedSubRegion === "SubRegions"
          ? ""
          : inputFields.selectedSubRegion,
      sortBy: inputFields.sortBy === "Sort By" ? "" : inputFields.sortBy,
    };
    setInputFieldValues(updatedInputFields);
  }

  return (
    <>
      <InputField
        regions={regions}
        subRegions={subRegions}
        onChangeInputField={handleInputFields}
      ></InputField>
      <DataContainer
        inputFields={inputFieldValues}
        data={data}
        loading={loading}
        error={error}
      ></DataContainer>
    </>
  );
};

export default HomePage;
