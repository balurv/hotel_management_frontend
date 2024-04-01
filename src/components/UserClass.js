import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        object:{},
      count: 0,
    };
  }
  async componentDidMount(){
    const data = await fetch('https://api.github.com/users/balurv');
    const json = await data.json();
    // console.log(json);
    this.setState({
        object: json,
    });
  }
  render() {
    const { name, location, url } = this.state.object;
    return (
      <div>
        <h2>count:{this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment count
        </button>
        <h1>Person name: {name}</h1>
        <h2>Location: {location} </h2>
        <h3>Connect: {url} </h3>
      </div>
    );
  }
}

export default UserClass;
