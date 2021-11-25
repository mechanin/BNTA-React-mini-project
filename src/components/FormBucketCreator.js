import { useState } from "react";

const BucketCreator = ({ countries, onBucketSubmission }) => {
  const [country, setCountry] = useState("");
  const [capital, setCapital] = useState("");
  const [population, setPopulation] = useState("");
  const [currency, setCurrency] = useState("");
  const [goal, setGoal] = useState("");
  const [description, setDescription] = useState("");
  const [flag, setFlag] = useState("");

  const handleCountryChange = (event) => {
    setCountry(event.target.value);

    const selectedCountry = countries.find(
      (country) => country.name.common === event.target.value
    );

    console.log("handleCountryChange EventTargetValue: " + event.target.value);

    console.log("handleCountryChange country: " + country);

    setFlag(selectedCountry.flags.svg);
    setCapital(selectedCountry.capital[0]);
    setPopulation(selectedCountry.population);
    setCurrency(
      selectedCountry.currencies[Object.keys(selectedCountry.currencies)[0]]
        .name +
        " (" +
        selectedCountry.currencies[Object.keys(selectedCountry.currencies)[0]]
          .symbol +
        ")"
    );
  };

  const handleGoalChange = (event) => {
    setGoal(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();

    const newBucket = {
      id: null,
      country: country,
      capital: capital,
      currency: currency,
      population: population,
      done: false,
      title: goal,
      body: description,
      flag: flag
    };

    onBucketSubmission(newBucket);

    setCountry("");
    setCapital("");
    setPopulation("");
    setCurrency("");
    setGoal("");
    setDescription("");
    setFlag("");
  };
  var countryNames = countries.map((country) => country.name.common).sort();

  var options = countryNames.map((country) => {
    return <option value={country}>{country}</option>;
  });

  return (
    <>
      <div class="grid min-h-0 place-items-center">
        <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-8 bg-clip-padding bg-opacity-60 border border-gray-200">
          <h1 class="text-2xl font-semibold text-center">Add a new Bucket</h1>
          <form class="mt-6" onSubmit={handleFormSubmission}>
            <div>
              <div class="flex justify-between gap-3">
                <div>
                  <span class="w-1/2">
                    <label class="block text-xs font-semibold text-gray-600 uppercase">
                      Country:{" "}
                    </label>
                    <select
                      class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      name="countries"
                      value={country}
                      onChange={handleCountryChange.bind(this)}
                    >
                      {options}
                    </select>
                  </span>
                </div>
                <div>
                  <span class="w-1/2">
                    <img src={flag} alt={country.name}/>
                    <p
                      class="block uppercase mx-auto shadow bg-white text-indigo-600 focus:shadow-outline 
                                  focus:outline-none text-white text-xs py-3 px-4 rounded font-bold"
                    >
                      Capital: {capital}
                    </p>
                    <p
                      class="block uppercase mx-auto shadow bg-white text-indigo-600 focus:shadow-outline 
                                  focus:outline-none text-white text-xs py-3 px-4 rounded font-bold"
                    >
                      Currency: {currency}
                    </p>
                    <p
                      class="block uppercase mx-auto shadow bg-white text-indigo-600 focus:shadow-outline 
                                  focus:outline-none text-white text-xs py-3 px-4 rounded font-bold"
                    >
                      Population: {population}
                    </p>
                  </span>
                </div>
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-600 uppercase">
                  Goal:{" "}
                </label>
                <input
                  class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  type="text"
                  value={goal}
                  onChange={handleGoalChange}
                ></input>
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-600 uppercase">
                  Description:{" "}
                </label>
                <input
                  class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  type="text"
                  value={description}
                  onChange={handleDescriptionChange}
                ></input>
              </div>
              <div>
                <input
                  class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
                  type="submit"
                  value="Add to BucketList"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BucketCreator;