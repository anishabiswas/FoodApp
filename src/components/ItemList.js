import { ITEM_LOGO_URL } from "../utils/constant";

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <div
          className="Item-info m-4 p-4 border-b-1 border-gray-300 flex justify-between"
          key={item.card.info.id}
        >
          <div className="mb-3 w-9/12">
            <div className=" mb-3">
              <span className="font-bold text-xl">{item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}{" "}
              </span>
            </div>
            {item?.card?.info?.ratings?.aggregatedRating?.rating && (
              <p className=" mb-2">
                ⭐ {item.card.info.ratings.aggregatedRating.rating}
                {item.card.info.ratings.aggregatedRating.ratingCountV2 &&
                  ` (${item.card.info.ratings.aggregatedRating.ratingCountV2})`}
              </p>
            )}
            <p className="text-xs mb-2">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 px-2 mb-4 ">
            <div className="absolute">
              <button className="font-bold bg-amber-50 rounded-lg mx-13 mt-42 px-6 py-2 text-green-700 text-xl">
                ADD
              </button>
            </div>
            <img
              className=" rounded-2xl"
              src={ITEM_LOGO_URL + item.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
