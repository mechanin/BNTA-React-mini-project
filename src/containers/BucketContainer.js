import {useState,useEffect} from 'react';
import BucketList from "../components/BucketList.js"
import BucketItems from '../BucketItems.js';
import BucketCreator from '../components/BucketCreator.js';

const BucketContainer = () => {

    const [buckets, setBuckets] = useState([]);
    const [countries, setCountries] = useState([])

    const getCountries = () => {
        console.log("Getting Initial List Of Countries")
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data=>data.map(country=>country.name.common))
        .then(data => setCountries(data))
    }

    const getCountryDetails = (country) => {
        console.log("Getting Countries details")
        fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => response.json())
        .then(data=>data.map(country => [country.capital, country.currencies, country.population]))
    } 

    useEffect(() => {
        setBuckets(BucketItems)
    }, []);

    useEffect(getCountries, []);

    const addNewBucket = (newBucket) => {
        newBucket.id = buckets.length + 1;
        setBuckets([...buckets, newBucket])
    }
   
    console.log(countries)

    return(
        buckets.length > 0 ?
        <>
        <BucketCreator countries={countries} onBucketSubmission={addNewBucket} countryDetails={getCountryDetails}/>
        <hr/>
        <BucketList buckets={BucketItems}/>
        </>
        :
        <p>Loading Buckets</p>
    )

}

export default BucketContainer;