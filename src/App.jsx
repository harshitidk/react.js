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
            <Card name="Being Anuj" designation="Investment Banker"
            portfolio="https://drive.google.com/drive/folders/1olGojevdQTRmqvb6DX14cZJ-DVaO3S3J" image="./src/assets/anuj.jpeg" />
            <Card name="Vina(yuck)" designation="Brand Manager"
            portfolio="https://drive.google.com/drive/folders/1olGojevdQTRmqvb6DX14cZJ-DVaO3S3J" image="./src/assets/vinayak.png" />
            <Card name="Ayush Shawty" designation="Executive Director"
            portfolio="https://drive.google.com/drive/folders/1olGojevdQTRmqvb6DX14cZJ-DVaO3S3J" image="./src/assets/ayush.png" />
            </div>
        </>
    );
}

export default App
