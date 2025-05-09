import User from "./User";
import UserClass from "./UserClass";
import { ABOUT_logo_URL } from "../utils/constant";

const About = () => {
  return (
    <div className="min-h-screen bg-white p-4 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-600">About us</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-xl">
          We are passionate about bringing delicious food to your doorstep. Our
          mission is to connect people with the best local restaurants and
          ensure fast, safe, and tasty food delivery at the tap of a button.
        </p>
      </div>

      {/* Optional image */}
      <img
        src={ABOUT_logo_URL}
        alt="About Food App"
        className="w-72 h-55 object-cover rounded-xl shadow mb-6"
      />

      {/* Our Values or Features */}
      <div className="max-w-md text-left space-y-4">
        <h2 className="text-xl font-semibold text-green-600">Why Choose Us?</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Fresh and hot meals from your favorite restaurants</li>
          <li>Fast delivery with real-time tracking</li>
          <li>User-friendly interface and secure payment options</li>
          <li>24/7 customer support for a smooth experience</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
