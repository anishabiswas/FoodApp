import { useDispatch } from "react-redux";
import { ITEM_LOGO_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="item-list">
      {items.map((item) => (
        <div
          className="Item-info m-4 p-4 border-b border-gray-300 flex justify-between"
          key={item.card.info.id}
        >
          {/* Text Content */}
          <div className="mb-3 w-9/12">
            <div className="mb-3">
              <span className="font-bold text-xl">{item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}{" "}
              </span>
            </div>

            {item?.card?.info?.ratings?.aggregatedRating?.rating && (
              <p className="mb-2">
                ⭐ {item.card.info.ratings.aggregatedRating.rating}
                {item.card.info.ratings.aggregatedRating.ratingCountV2 &&
                  ` (${item.card.info.ratings.aggregatedRating.ratingCountV2})`}
              </p>
            )}

            <p className="text-xs mb-2">{item.card.info.description}</p>
          </div>

          {/* Image & Button */}
          <div className="w-3/12 px-2 mb-4 relative">
            <img
              className="rounded-2xl w-full h-36 object-cover"
              src={ITEM_LOGO_URL + item.card.info.imageId}
              alt={item.card.info.name}
            />
            <button
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 font-bold bg-amber-50 rounded-lg px-6 py-1 text-green-700 text-sm shadow-md hover:cursor-pointer"
              onClick={() => handleAddItem(item)}
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
