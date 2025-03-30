import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is about page</p>
      <User name={"anisha Function"} age={24} email={"anie@hjnc.com"} />
      <UserClass name={"anish class"} age={28} email={"aniket@hjnc.com"} />
      <UserClass name={"aniket class"} age={28} email={"chimney@hjnc.com"} />
    </div>
  );
};

export default About;
