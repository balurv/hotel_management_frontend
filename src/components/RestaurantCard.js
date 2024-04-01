import { HOTEL_URL, LOCAL_HOST_URL } from "../utils/constants";

const RestaurantCard = (hotelData) => {

  const handleClick = async (event) => {
    try {
      const addressResponse = await fetch(
        LOCAL_HOST_URL + "/address?hotelId=" + hotelData.data.id
      );
      const addressData = await addressResponse.json(); // Parse JSON response
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  const { hotelName, phone, email, rating, imageUrl } = hotelData.data;
  return (
    <div
      className="res-card"
      onClick={(event) => handleClick(event, hotelData)}
    >
      <img className="res-logo" alt="res-card logo" src={imageUrl} />
      <h5>Hotel name: {hotelName}</h5>
      <h5>Email: {email}</h5>
      <h5>Ratings:{rating}</h5>
      <h6>Contact Number: {phone}</h6>
    </div>
  );
};


export const withPromoteLabel = () =>{
  return(props) => {
    return(
      <div>
        <label className="promoted">Promoted </label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;
