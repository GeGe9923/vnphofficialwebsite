import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/InigoPascual@VN.jpg"
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About Us"
        url="/"
        />
        <AboutUs/>
        <Footer/>
        </>
    )
}

export default About;