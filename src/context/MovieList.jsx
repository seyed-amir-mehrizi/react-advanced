import React, { Component } from "react";
import UserContext from "./userContext";

export class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("context : ", this.context);
  }

  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => {
          return <div>Movie List {userContext.name}</div>;
        }}
      </UserContext.Consumer>
    );
  }
}

MovieList.contextType = UserContext;

export default MovieList;
