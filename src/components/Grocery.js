const Grocery = () => {
  return (
    <div className="min-h-screen bg-white p-4 flex flex-col items-center">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-600">
          Grocery Section - Coming Soon 🛒
        </h1>
        <p className="mt-2 text-lg text-gray-700 max-w-md">
          We are working on launching our grocery delivery service. You'll soon
          be able to order daily essentials right from your home!
        </p>
      </div>

      <div className="max-w-md w-full bg-gray-100 p-6 rounded-lg shadow mt-4">
        <h2 className="text-xl font-semibold text-green-600 mb-4">
          Available Categories (Coming Soon)
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Fruits & Vegetables</li>
          <li>Dairy & Bakery</li>
          <li>Snacks & Beverages</li>
          <li>Staples (Rice, Dal, Atta)</li>
          <li>Household Items</li>
          <li>Personal Care</li>
          <li>Cleaning Essentials</li>
        </ul>
      </div>

      <p className="mt-6 text-md text-orange-500 font-medium">
        Stay tuned! Grocery delivery will be available in your area very soon.
      </p>
    </div>
  );
};

export default Grocery;
