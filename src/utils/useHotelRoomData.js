import { useEffect, useState } from "react"
import { HOTEL_ROOM_URL } from "./constants";

const useHotelRoomData = (id) =>{
    const [hotelRoomData, setHotelRoomData] = useState(null);

    useEffect(() =>{
        fetchHotelData();
    }, []);

    const fetchHotelData = async () =>{
        const data = await fetch(HOTEL_ROOM_URL+ id);
        const json = await data.json();
        setHotelRoomData(json);
    }
    
    return hotelRoomData;
}

export default useHotelRoomData;