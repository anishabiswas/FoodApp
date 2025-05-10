const Contact = () => {
  return (
    //
    <div className="min-h-screen bg-white p-4 flex flex-col items-center">
      {/* Header section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-600">Customer Support</h1>
        <p className="mt-2 text-lg text-gray-700">
          Email:{" "}
          <span className="text-pink-400 font-semibold  hover:text-blue-600">
            support@fooddelicacy.in
          </span>
        </p>
      </div>
      <form className="w-full max-w-md bg-gray-100 p-6 rounded-lg shadow space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            placeholder="Your message..."
            className="w-full mt-1 p-2 border border-gray-300 rounded h-24"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
