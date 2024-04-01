import { useEffect, useState } from "react";
import { HOTEL_ROOM_IMAGES_URL } from "./constants";

const useHotelRoomImages = (roomId) =>{
    const[hotelRoomImages, setHotelRoomImages] = useState([]);
    
    useEffect(() =>{
        fetchRoomImages();
    }, []);

    const fetchRoomImages = async () =>{
        const data = await fetch(HOTEL_ROOM_IMAGES_URL+roomId);
        const json = await data.json();
        setHotelRoomImages(json);
    }

    return hotelRoomImages;
};


export default useHotelRoomImages;