import {useState} from 'react';

const BucketCreator = ({countryNames, onClickCountryData, onBucketSubmission}) => {
    

    const [country, setCountry] = useState("");
    const [capital, setCapital] = useState("");
    const [population, setPopulation] = useState("");
    const [currency, setCurrency] = useState("");
    const [goal, setGoal] = useState("");
    const [description, setDescription] = useState("");

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
        onClickCountryData(event.target.value)
        console.log("LOG" + event.target.value)
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
                <select name="countries" value={country} onChange={handleCountryChange}>
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