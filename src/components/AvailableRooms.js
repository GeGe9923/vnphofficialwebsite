import RoomsData from "./RoomsData";
import "./RoomsStyles.css"
import DeluxeRoom from "../assets/DeluxeRoom.jpg"
import DoubleBedroom from "../assets/DoubleBedRoom.jpg"
import FamilyRoom from "../assets/FamilyRoom.jpg"
import BarkadaRoom from "../assets/BarkadaRoom.jpg"

const AvailableRooms = () =>{
    return(
        <div className="rooms">
            <RoomsData
            className="room-one"
            heading="Deluxe Room"
            text="Deluxe rooms are usually larger 
            than their standard counterparts, may include 
            a bathtub and a shower in the bathroom, and 
            include more high-end amenities."
            img1={DeluxeRoom}
            />
            <RoomsData
            className="room-two"
            heading="Double Bedroom"
            text="Single room is for one person. 
            Double bedroom can, as you note, mean either 
            a bedroom with a double bed or a bedroom that can 
            accommodate two people"
            img1={DoubleBedroom}
            />
            <RoomsData
            className="room-three"
            heading="Family Room"
            text="The family room is designed to be a place 
            where family and guests gather for group recreation 
            like talking, reading, watching TV, and other family 
            activities."
            img1={FamilyRoom}
            />
            <RoomsData
            className="room-four"
            heading="Barkada Room"
            text="Can accomodate a group of friends in the comfort of home"
            img1={BarkadaRoom}
            />
        </div>
    )
}

export default AvailableRooms;