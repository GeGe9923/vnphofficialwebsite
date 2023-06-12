import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeImg from "../assets/bg.jpg"
import Footer from "../components/Footer";
import AvailableRooms from "../components/AvailableRooms";


function Rooms (){
    return(<>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={HomeImg}
        title="Room Type"
        url="/rooms"
        />
        <AvailableRooms/>
        <Footer/>
        </>)
}

export default Rooms;