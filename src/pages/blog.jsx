import Header from "./components/Header"
import Footer from "./components/Footer"

export default function Blog() {
    return (
        <div>
            <Header />
            <p><a href="./blogs/01302023.html">30 jan 2023</a></p>
            <p><a href="./blogs/01282023.html">28 jan 2023</a></p>
            <p><a href="./blogs/01182023.html">18 jan 2023</a></p>
            <Footer />
        </div>
    )
}