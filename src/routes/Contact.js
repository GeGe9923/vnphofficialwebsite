import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactUsImg from "../assets/ContactUs.jpg"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg={ContactUsImg}
        title="Call Us"
        url="/"
        />
        <ContactForm/>
        <Footer/>
        </>
    )
}

export default Contact;