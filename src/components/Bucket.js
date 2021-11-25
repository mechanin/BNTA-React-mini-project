const Bucket = ({bucket}) => {

    return(
      
        <div class="w-80 mt-24 m-auto lg:mt-16 max-w-sm">
            <div class="bg-white shadow-2xl rounded-b-3xl">
            <img src={bucket.flag} alt={bucket.country} class="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover"/>
            <h3 class="text-center text-gray-800 text-2xl font-bold pt-6">{bucket.country}</h3>
            <p
                      class="block uppercase mx-auto shadow bg-white text-indigo-600 focus:shadow-outline 
                                  focus:outline-none text-white text-xs py-3 px-4 rounded font-bold"
                    >
                      Capital: {bucket.capital}
                    </p>
                    <p
                      class="block uppercase mx-auto shadow bg-white text-indigo-600 focus:shadow-outline 
                                  focus:outline-none text-white text-xs py-3 px-4 rounded font-bold"
                    >
                      Currency: {bucket.currency}
                    </p>
                    <p
                      class="block uppercase mx-auto shadow bg-white text-indigo-600 focus:shadow-outline 
                                  focus:outline-none text-white text-xs py-3 px-4 rounded font-bold"
                    >
                      Population: {bucket.population}
                    </p>
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