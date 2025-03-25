import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="rest-container">
        {/* restaurant cards */}
        {resList.map((restaurant) =>
          restaurant.data.cards.map((item) => (
            <RestaurantCard key={item.card.id} resData={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
