import RestaurantCard, { withPromoteLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { LOCAL_HOST_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const LabelPromotedRestaurantCard = withPromoteLabel(RestaurantCard);

const Body = () => {
  const [hoteldata, setHotelData] = useState([]);
  const [filteredHotelData, setFilteredHotelData] = useState([]);
  const [searchText, setSearchText] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(LOCAL_HOST_URL);
      const json = await response.json();
      setHotelData(json);
      setFilteredHotelData(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (hoteldata.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter-container">
        <div className="search">
          <input
            className="search-text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-text-btn"
            onClick={() => {
              console.log(searchText);
              const filterdHotelList = hoteldata.filter((hotel) => {
                return hotel.hotelName
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              console.log(filterdHotelList);
              setFilteredHotelData(filterdHotelList);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="filter-btn"
            onClick={() => {
              const filterdHotelList = hoteldata.filter(
                (hotel) => hotel.rating > 4
              );
              setFilteredHotelData(filterdHotelList);
            }}
          >
            Top Rated Hotels
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredHotelData.map((hotel) => (
          <Link to={"/hotel/" + hotel.id} key={hotel.id}>
            {hotel.promoted ? (
              <LabelPromotedRestaurantCard data={hotel} />
            ) : (
              <RestaurantCard data={hotel} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
