import React from "react";
import Button from "../Button/Button";
import BorderCard from "../BorderCard/BorderCard";
const Country = ({ country }) => {
  const currencies = country.currencies ? Object.keys(country.currencies).join(", ") : [];
  const languages = country.languages ? Object.values(country.languages).join(", ") : [];
  const borderCountries = country.borders ? Object.values(country.borders) : [];
  console.log(borderCountries);
  return (
    <section className="bg-light-mode dark:bg-dark-blue mt-10 dark:text-dark-mode">
      <div className="container mx-auto px-2 ">
        <Button></Button>
        <div className="mt-10 flex flex-col  gap-5 lg:flex-row lg:gap-20">
          <img src={country.flags.png} alt="" className="w-96" />
          <div className="flex flex-col gap-5 lg:gap-10 ">
            <h2 className="font-bold text-2xl">{country.name?.common || "Not defined"}</h2>
            <div className="flex flex-col gap-5 lg:flex-row lg:gap-20">
              <ul>
                <li>
                  <span className="font-medium">Native name : </span>
                  {country.name?.nativeName?.deu?.common || "Not defined"}
                </li>
                <li>
                  <span className="font-medium">Population : </span>
                  {country.population || "Not available"}
                </li>
                <li>
                  <span className="font-medium">Region: </span>
                  {country.region ? country.region :''}
                </li>
                <li>
                  <span className="font-medium">SubRegion: </span>
                  {country.subregion}
                </li>
                <li>
                  <span className="font-medium">Capital : </span>
                  {country.capital}
                </li>
              </ul>
              <ul>
                <li>
                  <span className="font-medium">Top Level Domain : </span>
                  {country.tld ? country.tld : ''}
                </li>
                <li>
                  <span className="font-medium">Currencies : </span>
                  {currencies}
                </li>
                <li>
                  <span className="font-medium">Languages : </span>
                  {languages}
                </li>
              </ul>
            </div>
            {borderCountries.length > 0 && (
              <div className="flex flex-wrap gap-2">
                <span className="font-medium">Border Countries : </span>
                {borderCountries.map((country, index) => {
                  return <BorderCard key={index}>{country}</BorderCard>;
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Country;
