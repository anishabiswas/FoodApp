import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRes, setResList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.9430915&lng=88.43611480000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(listOfRes);
    setFilteredData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-box">
        <input
          type="text"
          id="inputText"
          placeholder="Search for restaurants"
          value={searchData}
          onChange={(e) => {
            setSearchData(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            console.log(searchData);
            const filtered = listOfRes.filter((res) =>
              res.info.name.toLowerCase().includes(searchData.toLowerCase())
            );
            setFilteredData(filtered);
          }}
        >
          Search
        </button>
      </div>

      <button
        className="top-rated-btn"
        onClick={() => {
          const topFilteredData = listOfRes.filter(
            (res) => res.info.avgRating > 4.5
          );
          setFilteredData(topFilteredData);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="rest-container">
        {/* restaurant cards */}

        {filteredData.map((rest) => (
          <RestaurantCard key={rest.info.id} resData={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;
