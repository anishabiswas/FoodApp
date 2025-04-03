import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useResMenuData from "../utils/useResMenuData";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { id } = useParams();

  const menuData = useResMenuData(id);
  const [showIndex, setShowIndex] = useState(null);

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
  // for this itemcards sometimes cards[1] or [2]
  const categories =
    menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menu-card">
      <div className="hotel-intro text-center mb-10">
        <h1 className="font-bold text-3xl my-5">{name}</h1>
        <div className="extra-info text-lg font-medium">
          <span>⭐{avgRating + "  " + "(" + totalRatingsString + ")"}</span>
          <span style={{ marginRight: 2.5 + "em" }}></span>
          <span>{costForTwoMessage}</span>
          <p style={{ color: "red" }}>
            <b>{cuisines.join(", ")}</b>
          </p>
          <p>
            {areaName} - {"(" + sla.slaString + ")"}
          </p>
        </div>
      </div>
      {/* categories accordian -- two parts - header - title and body - food menu */}
      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card?.categoryId}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false} // comparing the state value
          setShowIndex={
            () =>
              showIndex !== index ? setShowIndex(index) : setShowIndex(null) //for setting the showitems false and if index is not same the update the state value
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
