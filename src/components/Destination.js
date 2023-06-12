import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
import CatarmanCathedral from "../assets/Catarman Cathedral.jpg"
import CatarmanCathedral1 from "../assets/Catarman Cathedral1.jpg"
import GGC from "../assets/GGM.jpg"
import GGC1 from "../assets/GGC1.jpg"

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>A Destination where you want to be, Tara na sa Catarman.</p>
      <DestinationData 
      className="first-des"
        heading="Catarman Cathedral"
        text="On Dec. 5, 1974, Catarman was made 
                    a diocese by Pope Paul VI, and on 
                    March 11, 1975, and Father Angel T. 
                    Hobayan was installed as the First 
                    Residential Bishop of the Diocese of 
                    Catarman.The diocese covers the whole 
                    province of Northern Samar, one of three 
                    provinces within the island of Samar 
                    bounded on the north by San Bernardino 
                    Strait, on the east by the Philippine 
                    Sea, on the west by the Samar Sea, and
                     on the south by the boundaries of 
                     Western Samar and Eastern Samar 
                     provinces. Covered by the diocese are 
                     a total of 24 towns, 570 barangays, 
                     and a land area of 3,499 kilometers. 
                     Catarman is the capital town and the 
                     center of the civil administration of 
                     the province.On the ecclesiastical side, 
                     the Diocese of Catarman is divided into 
                     four vicariates representing the municipalities 
                     of Allen, Catarman, Laoang, and Gamay, 
                     to which belong 18 canonically established 
                     parishes. Catarman is the seat of the diocese."
            img1={CatarmanCathedral}
            img2={CatarmanCathedral1}/>

<DestinationData
className="first-des-reverse"
        heading="Gaisano Catarman"
        text="Gaisano Grand Mall Catarman is one of the 
        top rated place listed as Shopping Mall in 
        Catarman , Department Store in Catarman , "
            img1={GGC}
            img2={GGC1}/>
    </div>
  );
};

export default Destination;
