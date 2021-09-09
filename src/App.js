import React, { Component } from "react";

import Searcbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import "./App.css";

class App extends Component {
  state = {
    searchbar: "",
  };
  onFormSubmit = (searchName) => {
    if (searchName) {
      this.setState({ searchbar: searchName });
    }
    return;
  };

  render() {
    const { searchbar } = this.state;
    return (
      <div className="App">
        <Searcbar submit={this.onFormSubmit} />
        <ImageGallery searchbar={searchbar} />
      </div>
    );
  }
}

export default App;
