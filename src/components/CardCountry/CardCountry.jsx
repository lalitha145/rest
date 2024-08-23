import React from "react";
import { Link } from "react-router-dom";

const CardCountry = ({ country }) => {
  return (
    <Link 
      to={`/country/${country.ccn3}`}
    >
      <div className="bg-light-mode-elements flex gap-5 flex-col rounded-lg overflow-hidden dark:bg-dark-blue-elements dark:text-dark-mode max-w-72 min-w-72">
      <img src={country.flags.png} alt="" className="h-48" />
      <h2 className="px-10 font-bold text-xl">{country.name.common}</h2>
      <ul className="px-10 mb-10">
        <li className="font-semibold flex gap-2">
          Population : {country.population || "Undefined"}
        </li>
        <li className="font-semibold flex gap-2">
          Region : {country.region || "Undefined"}
        </li>
        <li className="font-semibold flex gap-2">
          Capital : {country.capital || "Undefined"}
        </li>
      </ul>
    </div>
    </Link>
    
  );
};

export default CardCountry;
