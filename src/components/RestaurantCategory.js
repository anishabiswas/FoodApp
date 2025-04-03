import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // const { data } = props;

  //  const [showItems, setShowItems] = useState(false);
  const handleclick = () => {
    console.log("clicked");
    setShowIndex();
    //  setShowItems((showItems) => !showItems);
  };
  return (
    <div>
      {/* header */}
      <div className="restaurant-category header w-6/12 mx-auto p-3 shadow-lg bg-gray-100 my-3">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleclick}
        >
          <span className="title text-lg font-medium">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/* accordian body */}
        <div className="body-listItems ">
          {showItems && <ItemList items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};
export default RestaurantCategory;
