import './card.css';

function Card(props){
    return(
        <div className="card">
            <div className='card-container'>
                <img src={props.image}></img>
            </div>
            <h2>{props.name}</h2>
            <p>{props.designation}</p>
            <a href={props.portfolio} target="_blank" rel="noopener noreferrer">
            <div className="card-button">
            portfolio</div>
            </a>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
            <div className="card-link">
            linkedin</div>
            </a>
        </div>
    );
}


export default Card