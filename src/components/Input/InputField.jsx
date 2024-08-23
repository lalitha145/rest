import React, { useState } from "react";

const InputField = ({ regions, subRegions, onChangeInputField }) => {
  const [inputFieldValues, setInputFieldValues] = useState({
    searchBarValue: "",
    selectedRegion: "Regions",
    selectedSubRegion: "SubRegions",
    sortBy: "Sort By",
  });

  const handleInputFields = (type, value) => {
    let updatedInputFieldValues;

    if (type === "searchBar") {
      updatedInputFieldValues = {
        ...inputFieldValues,
        searchBarValue: value,
      };
    } else if (type === "selectRegion") {
      updatedInputFieldValues = {
        ...inputFieldValues,
        selectedRegion: value,
        selectedSubRegion: "SubRegions",
      };
    } else if (type === "selectSubRegion") {
      updatedInputFieldValues = {
        ...inputFieldValues,
        selectedSubRegion: value,
      };
    } else if (type === "sortBy") {
      updatedInputFieldValues = {
        ...inputFieldValues,
        sortBy: value,
      };
    }

    setInputFieldValues(updatedInputFieldValues);
    onChangeInputField(updatedInputFieldValues);
  };

  return (
    <section className="bg-light-mode dark:bg-dark-blue">
      <div className="container mx-auto flex flex-col gap-10 p-2 py-10">
        <div
          className="flex flex-col gap-10 md:flex-row flex-wrap"
          id="input-fields"
        >
          {/* Search Input with Icon */}
          <div className="relative md:w-1/2 xl:w-2/6">
            <input
              type="text"
              id="search"
              placeholder="Search for a country "
              className="py-3 pl-10 pr-3 rounded-lg w-full dark:text-dark-mode dark:bg-dark-blue-elements"
              value={inputFieldValues.searchBarValue}
              onChange={(e) => handleInputFields("searchBar", e.target.value)}
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-dark-mode">
              <i className="fas fa-search"></i>
            </span>
          </div>

          <select
            id="regions"
            value={inputFieldValues.selectedRegion}
            onChange={(e) => handleInputFields("selectRegion", e.target.value)}
            className="bg-light-mode-elements bg-arrow py-3 px-2 sm:px-5 w-1/2 rounded-lg bg-no-repeat appearance-none bg-right md:w-1/3 xl:w-48 dark:bg-dark-blue-elements dark:text-dark-mode dark:placeholder:text-dark-mode"
          >
            <option value="Filter By Region" disabled>
              Filter By Region
            </option>
            {regions.map((region, index) => (
              <option key={index} value={region}>
                {region}
              </option>
            ))}
          </select>

          <select
            id="sub-regions"
            value={inputFieldValues.selectedSubRegion}
            onChange={(e) =>
              handleInputFields("selectSubRegion", e.target.value)
            }
            className="bg-light-mode-elements bg-arrow py-3 px-2 sm:px-5 w-1/2 rounded-lg bg-no-repeat appearance-none bg-right md:w-1/3 xl:w-72 dark:bg-dark-blue-elements dark:text-dark-mode dark:placeholder:text-dark-mode"
          >
            <option value="SubRegions" disabled>
              Subregions
            </option>
            {subRegions.map((subRegion, index) => (
              <option key={index} value={subRegion}>
                {subRegion}
              </option>
            ))}
          </select>

          <select
            id="sortBy"
            value={inputFieldValues.sortBy}
            onChange={(e) => handleInputFields("sortBy", e.target.value)}
            className="bg-light-mode-elements bg-arrow py-3 px-2 sm:px-5 w-1/2 rounded-lg bg-no-repeat appearance-none bg-right md:w-1/3 xl:w-72 dark:bg-dark-blue-elements dark:text-dark-mode dark:placeholder:text-dark-mode"
          >
            <option value="Sort By" disabled>
              Sort By
            </option>
            <option value="Population ↑">Population Asc</option>
            <option value="Population ↓">Population Desc</option>
            <option value="Area ↑">Area Asc</option>
            <option value="Area ↓">Area Desc</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default InputField;
