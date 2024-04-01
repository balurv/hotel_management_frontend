import { HOTEL_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useHotelRoomData from "../utils/useHotelRoomData";
import useHotelRoomImages from "../utils/useHotelRoomImage";
import RoomImage from "./RoomImage";

const HotelMenu = () => {
  const { id } = useParams();
  const hotelRoomData = useHotelRoomData(id);
  console.log(hotelRoomData);
  if (hotelRoomData === null) {
    return <Shimmer />;
  }

  return (
    <div >
      <ul className="rooms-container">
        {hotelRoomData.map((room) => (
          <li className="rooms" key={room.id}>
            <RoomImage className = "room-image" roomid = {room.id}/>
            <h1>Rs: {room.cost}</h1>
            <h2>Number of beds: {room.numberOfBeds}</h2> 
            <h3>RoomType: {room.roomType}</h3> 
            <button>Reserver</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelMenu;
