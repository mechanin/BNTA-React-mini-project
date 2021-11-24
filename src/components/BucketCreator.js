import {useState} from 'react';

const BucketCreator = ({countries}) => {

    countries.sort();

    var options = countries.map((country) => {
        return <option value={country}>{country}</option>
    })

    return (
        <>
        <h2>Add a new Bucket</h2>
        <form>
            <div>
                <label>Country: </label>
                <select name="cars" id="cars">
                    {options}
                </select>
            </div>
            <div>
                <label>Goal: </label>
                <input type = "text"></input>
            </div>
            <div>
                <label>Description: </label>
                <input type = "text"></input>
            </div>
            <div>
                <input type="submit" value="Add to BucketList" />
            </div>
        </form>
        </>
    )
}

export default BucketCreator;