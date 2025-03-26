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
    <div className="card">
      <img
        alt="food-logo"
        className="food-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h2>{name}</h2>
      <span>
        <b>⭐{avgRating}</b>
      </span>
      <span style={{ marginRight: 2.5 + "em" }}></span>
      <span>{sla.slaString}</span>
      <h4 className="cuisine-text">{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
      <span>{costForTwo}</span>
    </div>
  );
};

export default RestaurantCard;
