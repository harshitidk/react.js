function Food()
{
    const food1 = "orange";
    const food2 = "apple";

    return(
        <ul>
            <li>Apple</li>
            <li>{food1.toUpperCase()}</li>
        </ul>
    );
}

export default Food