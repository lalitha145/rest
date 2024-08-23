import CardCountry from "../CardCountry/CardCountry";
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";

const DataContainer = ({ data, error, loading, inputFields }) => {
  const { searchBarValue, selectedRegion, selectedSubRegion, sortBy } =
    inputFields;

  let updatedData = data.filter((country) => {
    const region = country.region.toLowerCase();
    const countryName = country.name.common.toLowerCase();
    let subRegion = country.subregion || "";
    
    
    if (
      countryName.includes(searchBarValue.toLowerCase()) &&
      region.includes(selectedRegion.toLowerCase()) &&
      subRegion.toLowerCase().includes(selectedSubRegion.toLowerCase())
    ) {
      return true;
    }
  });

  const sortedData = sortByFn(updatedData,sortBy)

  function sortByFn(data, input) {
    let sortedData;

    if (input === "Population Asc") {
      sortedData = sort(data, "desc", "population");
    } else if (input === "Population Desc") {
      sortedData = sort(data, "asc", "population");
    } else if (input === "Area Asc") {
      sortedData = sort(data, "desc", "area");
    } else if (input === "Area Desc") {
      sortedData = sort(data, "asc", "area");
    } else {
      sortedData = data;
    }

    return sortedData;
  }

  function sort(data, type, value) {
    let sortedData;

    if (type === "asc") {
      sortedData = data.sort((a, b) => {
        return a[value] - b[value];
      });
    } else {
      sortedData = data.sort((a, b) => {
        return b[value] - a[value];
      });
    }

    return sortedData;
  }

  return (
    <section className="bg-light-mode dark:bg-dark-blue">
      {loading && <Spinner />}
      <div
        className="container mx-auto flex flex-wrap px-2 justify-center py-5 gap-20 xl:justify-start"
        id="countriesData"
      >
        {error && <Error message={"Error fetching Data"} />}
        {sortedData.length === 0 && data.length !== 0 && (
          <Error message={"No countries Found"} />
        )}
        {data.length > 0 &&
          sortedData.map((country, index) => {
            return <CardCountry key={index} country={country}></CardCountry>;
          })}
      </div>
    </section>
  );
};

export default DataContainer;
