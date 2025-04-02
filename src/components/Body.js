import RestaurantCard, { WithDiscountInfo } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRes, setResList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchData, setSearchData] = useState("");

  const ResCardDiscountInfo = WithDiscountInfo(RestaurantCard);
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5868067&lng=88.3959644&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus === false) {
    return <h1>Seems like you are offline, please try after sometime !!</h1>;
  }

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search-box p-2 m-2 ">
          <input
            className="border p-1"
            type="text"
            id="inputText"
            placeholder=" Search for restaurants"
            value={searchData}
            onChange={(e) => {
              setSearchData(e.target.value);
            }}
          />
          <button
            className="search-btn px-2 py-2 m-4 bg-gray-200 rounded-lg font-medium"
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
        <div className="filter-box p-2 m-2 items-center">
          <button
            className="top-rated-btn  px-2 py-2 m-4 bg-gray-200 rounded-lg font-medium"
            onClick={() => {
              const topFilteredData = listOfRes.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredData(topFilteredData);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="rest-container flex flex-wrap justify-center m-4">
        {/* restaurant cards */}
        {console.log(filteredData)};
        {filteredData.map((rest) => (
          <Link key={rest.info.id} to={"/restaurants/" + rest.info.id}>
            {rest.info.aggregatedDiscountInfoV3 ? (
              <ResCardDiscountInfo resData={rest} />
            ) : (
              <RestaurantCard resData={rest} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
