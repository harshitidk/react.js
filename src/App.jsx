import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './card/Card.jsx'
import Title from './title/Title.jsx'

function App() {
    return(
        <>
            <Title />
            <div className='list-cards'>
            <Card name="Harshit Heya" designation="Product Designer"
            portfolio="https://bento.me/harshit-heya" image="./src/assets/pfp.jpeg" />
            <Card name="Being Anuj" designation="Financial Analyst"
            portfolio="https://drive.google.com/drive/folders/1olGojevdQTRmqvb6DX14cZJ-DVaO3S3J" image="./src/assets/anuj.jpeg" />
            <Card name="Vinayak Shwty" designation="Brand Manager"
            portfolio="https://drive.google.com/drive/folders/1olGojevdQTRmqvb6DX14cZJ-DVaO3S3J" image="./src/assets/vinayak.png" />
            </div>
        </>
    );
}

export default App
