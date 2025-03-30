const User = ({ name, age, email }) => {
  return (
    <div className="user">
      <h1>Username: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>email: {email}</h3>
    </div>
  );
};

export default User;
