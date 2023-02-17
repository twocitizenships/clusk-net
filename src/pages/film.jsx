import Header from './components/Header'
import Footer from './components/Footer'

export default function Film() {
    return (
        <div className="gallery">
            <Header />
            <p>Bookings: <a href="mailto:twocitizenships@gmail.com">twocitizenships@gmail.com</a></p>
            <img src="../film/Paradise2Atami.jpg" title="La Libertad, El Salvador [2022]" width="350px"></img>
            <img src="../film/ParadiseAtami.jpg" title="La Libertad, El Salvador [2022]" width="350px"></img>
            <img src="../film/SlimAaronsAtami.jpg" title="La Libertad, El Salvador [2022]" width="350px"></img>
            <img src="../film/EdgeOfWorldAtami.jpg" title="La Libertad, El Salvador [2022]" width="350px"></img>
            <img src="../film/HeavenAtami.jpg" title="La Libertad, El Salvador [2022]" width="350px"></img>
            <img src="../film/AccordionSpain.jpeg" title="Valencia, Spain [2013]" width="350px"></img>
            <img src="../film/AirplaneWingSpain.jpeg" title="Valencia, Spain [2013]" width="350px"></img>
            <img src="../film/BullFightSpain.jpeg" title="Valencia, Spain [2013]" width="350px"></img>
            <img src="../film/CookingKuwait.jpeg" title="Kuwait [2014]" width="350px"></img>
            <img src="../film/SheepKuwait.jpeg" title="Kuwait [2014]" width="350px"></img>
            <Footer />
        </div>
    );
}