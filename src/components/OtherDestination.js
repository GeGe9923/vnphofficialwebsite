import "./OtherDestinationStyles.css"
import OtherDestinationData from "./OtherDestinationData.js";
import OtherDestinationimg1 from "../assets/Catarman Ine.jpg"
import OtherDestinationimg2 from "../assets/BusayFalls1.jpg"
import OtherDestinationimg3 from "../assets/DalakitBlvd.jpg"

function OtherDestination(){
    return(
        <div className="otherdestination">
        <h1>Other Destination</h1>
           <p>Discover unique destination in Northern, Samar</p> 
           <div className="otherdestinationcard">
           <OtherDestinationData
           image={OtherDestinationimg1}
           heading="Catarman Ine Freedom Park"
           text="Freedom Park is a park in Catarman, Northern Samar. 
           Freedom Park is situated nearby to the government office 
           Department of Interior and Local Government and 
           Catarman Central Fire Station"
           />
           <OtherDestinationData
           image={OtherDestinationimg2}
           heading="Busay Falls"
           text="Busay Falls is a waterfall in Northern Samar. 
           Busay Falls is situated nearby to the localities 
           Bare-es and Multo."
           />
           <OtherDestinationData
           image={OtherDestinationimg3}
           heading="Barangay Dalakit Boulevard"
           text="Splendid Sunset at Dalakit Boulevard"
           />
           </div>
           
        </div>
    )
}

export default OtherDestination;