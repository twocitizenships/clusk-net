import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Links() {
    return (
        <>
            <Header />
            {/* <p>&#127902;: <a href="/film">@twocitizenships</a></p> */}
            <p>&#127902;: <a href="https://instagram.com/twocitizenships">@twocitizenships</a></p>
            <p><style jsx>{`height:15px`}</style>
                <img src="/github.svg"></img>: <a href="https://github.com/twocitizenships">@twocitizenships</a>
            </p>
            <p><style jsx>{`height:15px`}</style>
                <img src="/spotify.svg"></img>: <a href="https://open.spotify.com/artist/4QyBej1bOaOJRWEDtLh8GZ?si=gP8b84x5S2K40gq2cWrlWA"> realpolitik</a>
            </p>
            <p>&#128231;: <a href="mailto:twocitizenships@gmail.com">twocitizenships@gmail.com</a></p>
            <br></br>
            <p>BTC Address</p>
            <p>bc1qt2ctcuf9dzv05da82twr4es2rttv4hwjszwrjth04m05f4j7njfqnckxtc</p>
            <img src="/Address.jpeg"></img>
            <Footer />
        </>
    )
}