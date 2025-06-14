import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './card/Card.jsx'
import Title from './title/Title.jsx'
import pfp from './assets/pfp.jpeg';
import anuj from './assets/anuj.jpeg';
import vinayak from './assets/vinayak.png';
import ayush from './assets/ayush.png';


function App() {
    return(
        <>
            <Title />
            <div className='list-cards'>
            <Card name="Harshit Heya" designation="Product Designer"
            portfolio="https://bento.me/harshit-heya" image={pfp} link="https://www.linkedin.com/in/harshitheya/" />
            <Card name="Being Anuj" designation="Investment Banker"
            portfolio="https://drive.google.com/drive/folders/1olGojevdQTRmqvb6DX14cZJ-DVaO3S3J" image={anuj} link="https://www.linkedin.com/in/anujkumarsh/" />
            <Card name="Vina(yuck)" designation="Brand Manager"
            portfolio="https://bit.ly/PortfolioXVinayak" image={vinayak} link="https://www.linkedin.com/in/vinayak-sharma-9712bb289/" />
            <Card name="Ayush Shawty" designation="Executive Director"
            portfolio="https://ayushportfolio-bba.vercel.app/" image={ayush} link="https://www.linkedin.com/in/ayush-bharti-8934bb232/" />
            </div>
        </>
    );
}

export default App
