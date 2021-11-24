const BucketCreator = () => {

    return (
        <>
        <h2>Add a new Bucket</h2>
        <form>
            <div>
                <label for="cars">Choose a car: </label>
                <select id="cars" name="cars">
                <option value="country">Country Goes Here</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
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