import React, { Component } from "react";
import logo from "./logo.svg";
import Header from "./Header";
import "./App.css";
// extend react Component to get special features
class App extends Component {
  constructor(props) {
    // super allows for use of the components methods we imported from react.
    super(props);
    // state holdsall of our data wwe are working with in the component
    this.state = {
      picture: "",
      name: "",
      friends: []
    };
    this.updatePicture = this.updatePicture.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }
  // update picture method takes in the value passed in and calls setState() to update the state of the component
  updatePicture(event) {
    console.log(event.target.value);
    // set state will cause a rerendering of your component with the new data passed in
    this.setState({ picture: event.target.value });
  }
  updateName(event) {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  }

  addFriend() {
    const { name, picture, friends } = this.state;
    // let newFriends = friends.slice();
    // newfriends.push({ picture: picture, name: name });
    // this.setState({ friends: newFriends, picture: "", name: "" });

    this.setState({
      friends: [...friends, { name: name, picture: picture }],
      name: "",
      picture: ""
    });
  }

  render() {
    // destructure state to avoid rewriting "this.state" multiple times
    const { friends, name, picture } = this.state;
    console.log(friends);
    // map over friends array returning the pertinent values wrapped in JSX and set equal to anew variable called mappedFriends
    const mappedFriends = friends.map((element, index, array) => {
      return (
        // key is required on the outer most parent when mapping over an array
        <div key={element.name}>
          {/* conditionally rendering styles based on the index */}
          <img
            style={{
              width: "100px",
              border: index % 2 === 1 ? "red 4px solid" : "blue 8px solid"
            }}
            src={element.picture}
          />
          <span>{element.name}</span>
        </div>
      );
    });
    return (
      <div>
        {/* this is an example of component based architecture*/}

        <Header label="this is now my header from prop" />
        <Header label="this is a different header from prop" />
        <Header label="last header" />
        <label>Picture</label>
        <input onChange={this.updatePicture} value={picture} />

        <label>Name</label>
        <input onChange={event => this.updateName(event)} value={name} />

        <button onClick={this.addFriend}>Add Friend</button>
        {/* render mapped over friends */}
        {mappedFriends}
      </div>
    );
  }
}

export default App;
