import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { EMPTY_CART_LOGO_URL } from "../utils/constant";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleclearItems = () => {
    console.log("clear items");
    dispatch(clearCart());
  };
  return (
    <div className="cart text-center m-4 p-4">
      <h2 className="text-2xl font-bold my-2 ">Order Details</h2>
      <button
        className="m-2 p-2 mb-10 bg-black text-amber-50 rounded-xl"
        onClick={handleclearItems}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && (
        <div className="w-2/12 h-6/12 m-auto" m-auto>
          <img
            className=" w-full object-cover"
            src={EMPTY_CART_LOGO_URL}
            alt="Empty-Cart"
          />
          <h1 className="text-lg my-2 font-bold">Your cart is empty</h1>
          <p>You can go to home page to view more restaurants</p>
        </div>
      )}
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
