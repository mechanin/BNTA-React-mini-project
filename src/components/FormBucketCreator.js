import {useState} from 'react';

const BucketCreator = ({countryNames, onClickCountryData, currentCountryData, onBucketSubmission}) => {
    

    const [country, setCountry] = useState("");
    const [capital, setCapital] = useState("");
    const [population, setPopulation] = useState("");
    const [currency, setCurrency] = useState("");
    const [goal, setGoal] = useState("");
    const [description, setDescription] = useState("");

    const handleCountryChange = (event) => {
        onClickCountryData(event.target.value);
        console.log("handleCountryChange EventTargetValue: " + event.target.value);
        setCountry(event.target.value);
        console.log("handleCountryChange country: " + country);
        

        setCapital(currentCountryData.capital[0]);
        // console.log("handleCountryChange capital: " + currentCountryData.capital[0]);
    }

    const handleGoalChange = (event) => {
        setGoal(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handleFormSubmission = (event) => {
        event.preventDefault();

        setCapital()
    

        const newBucket = {
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
        setGoal("");
        setDescription("");
    }

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