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
            <Card />
            <Card />
            <Card />
            </div>
        </>
    );
}

export default App
