import Bucket from "./Bucket";

const BucketList = ({buckets}) =>{

    const bucketComponents = buckets.map(bucket => {
        return(
            <Bucket bucket={bucket} key={bucket.id}/>
        )
    })

    return(
        <div>
            {bucketComponents}
        </div>
    )



}

export default BucketList;