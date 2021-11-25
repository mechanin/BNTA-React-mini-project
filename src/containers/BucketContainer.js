import {useState,useEffect} from 'react';
import BucketList from "../components/BucketList.js"
import BucketItems from '../BucketItems.js';
import BucketCreator from '../components/FormBucketCreator.js';

const BucketContainer = () => {

    const [buckets, setBuckets] = useState([]);
    const [allCountries, setAllCountries] = useState([])

    const getCountries = () => {
        console.log("Getting Initial List Of Countries")
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => setAllCountries(data))
    }

    useEffect(() => {
        setBuckets([])
    }, []);

    useEffect(getCountries, []);

    const addNewBucket = (newBucket) => {
        newBucket.id = buckets.length + 1;
        setBuckets([...buckets, newBucket])
    }

    const updateBucket = (id) => {
        console.log("Updating BucketList")
        // const bucketToUpdate = buckets[id-1];
        // bucketToUpdate.completed = true;

        setBuckets(
            buckets.filter(bucket => bucket.id!==id)
        )
    }
   

    return(
        buckets.length > 0 ?
        <>
        {/* Form */}
        <BucketCreator countries={allCountries} onBucketSubmission={addNewBucket}/>
        <hr/>
        <BucketList buckets={buckets} onBucketUpdate = {updateBucket}/>
        </>
        :
        <>
        <BucketCreator countries={allCountries} onBucketSubmission={addNewBucket}/>
        <hr/>
        <p>Loading Buckets</p>
        </>
    )

}

export default BucketContainer;