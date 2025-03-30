import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useResMenuData from "../utils/useResMenuData";

const RestaurantMenu = () => {
  const { id } = useParams();

  const menuData = useResMenuData(id);

  if (menuData === null) return <Shimmer />;
  // if statement is used just before this destructing otherwise it will not wait for data and it will start to destructure then it will throw an error
  const {
    name,
    avgRating,
    areaName,
    costForTwoMessage,
    cuisines,
    totalRatingsString,
    sla,
  } = menuData?.cards[2]?.card?.card?.info;

  const { itemCards } =
    menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="menu-card">
      <div className="hotel-intro">
        <h1>{name}</h1>
        <span>⭐{avgRating + "  " + "(" + totalRatingsString + ")"}</span>
        <span style={{ marginRight: 2.5 + "em" }}></span>
        <span>{costForTwoMessage}</span>
        <p style={{ color: "red" }}>
          <b>{cuisines.join(", ")}</b>
        </p>
        <p>{areaName}</p>
        <p>{sla.slaString}</p>
      </div>
      <div className="food-menu">
        <h4>Food Menu:</h4>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name +
                " -  Rs. " +
                (item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100)}
            </li>
          ))}
          <li>cold drinks</li>
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
