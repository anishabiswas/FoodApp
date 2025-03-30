import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
      //   userInfo: {
      //     name:"anisha",
      //     url:"htkjdk",
      //   }
    };
    console.log(this.props.name + "constructor called");
  }

  async componentDidMount() {
    // console.log("componentDidMount");

    const data = await fetch("https://api.github.com/users/anishabiswas");
    const json = await data.json();
    this.setState({ userInfo: json });
    console.log(this.props.name + "compDIDmount called");
  }

  componentDidUpdate() {
    console.log(this.props.name + "compDIDUpdate called");
  }

  componentWillUnmount() {
    console.log(this.props.name + "compWilUnmount called");
  }
  render() {
    const { name, age, email } = this.props;
    const { login, avatar_url } = this.state.userInfo;
    console.log(name + "render called");
    return (
      <div className="user">
        <h1>Username: {login}</h1>
        <img src={avatar_url} />
      </div>
    );
  }
}

export default UserClass;
