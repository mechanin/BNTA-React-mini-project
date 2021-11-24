import {useState,useEffect} from 'react';
import BucketList from "../components/BucketList.js"
import BucketItems from '../BucketItems.js';
import BucketCreator from '../components/BucketCreator.js';

const BucketContainer = () => {

    const [buckets, setBuckets] = useState([]);


    useEffect(() => {
        
        setBuckets(BucketItems)
    }, []);

    return(
        buckets.length > 0 ?
        <>
        <BucketCreator />
        <hr/>
        <BucketList buckets={BucketItems}/>
        </>
        :
        <p>Loading Buckets</p>
    )

}

export default BucketContainer;