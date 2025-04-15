const Contact = () => {
  return (
    <div className="contact">
      <h1>Get in touch</h1>
      <h1>send your email</h1>
      <div className="info-bar">
        <input
          className="m-2 p-2 border-black border "
          type="text"
          placeholder="email"
        ></input>
        <button className="m-2 p-2 border-black border rounded-lg bg-gray-100 ">
          Save
        </button>
      </div>
    </div>
  );
};

export default Contact;
