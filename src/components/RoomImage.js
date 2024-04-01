import useHotelRoomImages from "../utils/useHotelRoomImage";
import Shimmer from "./Shimmer";

const RoomImage = (roomId) =>{

    const images = useHotelRoomImages(roomId.roomid);

    if(images === null){
        return <Shimmer />
    } 
    console.log(images);
    return(
        <div>
          {
            images.map((image) =>(
                <img className="res-logo" alt="res-card logo" src={image.imageUrl} />

            ))
          }
        </div>
    )
}

export default RoomImage;