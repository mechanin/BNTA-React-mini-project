const Bucket = ({bucket}) => {

    return(
        <div class="w-80 mt-24 m-auto lg:mt-16 max-w-sm">
            <div class="bg-white shadow-2xl rounded-b-3xl">
            <h2>Location</h2>
            <h3>Country</h3>
            <p>{bucket.country}</p>
            <h4>Capital</h4>
            <p>{bucket.capital}</p>
            <h4>Currency</h4>
            <p>{bucket.currency}</p>
            <h4>Population</h4>
            <p>{bucket.population}</p>
            <h2>What To Do</h2>
            <h3>Title</h3>
            <p>{bucket.title}</p>
            <h3>Description</h3>
            <p>{bucket.body}</p>
            </div>
        </div>
    )
}

export default Bucket;