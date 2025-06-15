import './card.css';

function Card(){
    return(
        <div className="card">
            <img src="./src/assets/pfp.jpeg" width="200px"></img>
            <h2>harshit heya</h2>
            <p>(product designer)</p>
            <a href="https://bento.me/harshit-heya" target="_blank" rel="noopener noreferrer">
            <div className="card-button">
            show portfolio</div>
            </a>
        </div>
    );
}

export default Card