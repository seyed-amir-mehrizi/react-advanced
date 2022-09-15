import React, { Component } from "react";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        name: "Amir",
      },
    };
  }

  render() {
    return (
      <UserContext.Provider value={this.state.currentUser}>
        <div>
          <MoviePage />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
