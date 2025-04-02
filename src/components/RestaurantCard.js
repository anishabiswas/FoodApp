import { CDN_URL } from "../utils/constant";
import resList from "../utils/mockData";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cloudinaryImageId,
    avgRating,
    cuisines,
    areaName,
    sla,
    costForTwo,
  } = resData?.info; // Updated to access card directly
  return (
    <div className="card w-[300px] m-4 p-4 hover:bg-gray-100">
      <div className="food-box">
        <img
          alt="food-logo"
          className="food-logo rounded-2xl w-67 h-40 object-cover"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="card-info h-[170px] ">
        <h2 className="font-bold py-2 text-lg">{name}</h2>
        <span>
          <b>⭐{avgRating}</b>
        </span>
        <span style={{ marginRight: 2.5 + "em" }}></span>
        <span>{sla.slaString}</span>
        <h4 className="cuisine-text">{cuisines.join(", ")}</h4>
        <h4>{areaName}</h4>
        <span>{costForTwo}</span>
      </div>
    </div>
  );
};

export const WithDiscountInfo = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    const { aggregatedDiscountInfoV3 } = resData?.info;

    return (
      <>
        <RestaurantCard {...props} />
        <h2 className="font-bold text-center relative border-1 border-green-400 rounded-2xl mx-4">
          {aggregatedDiscountInfoV3.header +
            " " +
            aggregatedDiscountInfoV3.subHeader}
        </h2>
      </>
    );
  };
};

export default RestaurantCard;
