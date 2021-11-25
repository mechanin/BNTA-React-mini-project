import {useState} from 'react';

const BucketCreator = ({countries, onBucketSubmission}) => {
    

    const [country, setCountry] = useState("");
    const [capital, setCapital] = useState("");
    const [population, setPopulation] = useState("");
    const [currency, setCurrency] = useState("");
    const [goal, setGoal] = useState("");
    const [description, setDescription] = useState("");

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
        
        const selectedCountry = countries.find(country => country.name.common === event.target.value);
    
        console.log("handleCountryChange EventTargetValue: " + event.target.value);
        
        console.log("handleCountryChange country: " + country);
        
        setCapital(selectedCountry.capital[0]);
        setPopulation(selectedCountry.population);
        setCurrency(
            selectedCountry.currencies[Object.keys(selectedCountry.currencies)[0]].name 
            + " ("+selectedCountry.currencies[Object.keys(selectedCountry.currencies)[0]].symbol+")"
            );
    }

    const handleGoalChange = (event) => {
        setGoal(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

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
            body: description
        }

        onBucketSubmission(newBucket);

        setCountry("");
        setCapital("");
        setPopulation("");
        setCurrency("");
        setGoal("");
        setDescription("");
    }
    var countryNames = countries.map(country=>country.name.common).sort()
    
    var options = countryNames.map((country) => {
        return <option value={country}>{country}</option>
    })

    return (
        <>
        <h2>Add a new Bucket</h2>
        <form onSubmit={handleFormSubmission}>
            <div>
                <label>Country: </label>
                <select name="countries" value={country} onChange={handleCountryChange.bind(this)}>
                    {options}
                </select>
            </div>
            <div>
            <p>Capital: {capital}</p>
            <p>Currency: {currency}</p>
            <p>Population: {population}</p>
            </div>
            <div>
                <label>Goal: </label>
                <input type = "text" value={goal} onChange={handleGoalChange}></input>
            </div>
            <div>
                <label>Description: </label>
                <input type = "text" value={description} onChange={handleDescriptionChange}></input>
            </div>
            <div>
                <input type="submit" value="Add to BucketList" />
            </div>
        </form>
        </>
    )
}

export default BucketCreator;