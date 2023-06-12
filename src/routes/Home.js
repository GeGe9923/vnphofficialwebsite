import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeImg from "../assets/bg.jpg"
import Destination from "../components/Destination";
import OtherDestination from "../components/OtherDestination";
import Footer from "../components/Footer";

function Home (){
    return(<>
        <div className="home">
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={HomeImg}
        title="Your Home Away From Home"
        text="Choose your favourite Room"
        buttonText="Available Rooms"
        url="/"
        btnClass="show"
        />
        
        </div>
        <Destination/>
        <OtherDestination/>
        <Footer/>

        </>)
}

export default Home;