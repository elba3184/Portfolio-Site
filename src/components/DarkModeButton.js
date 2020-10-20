import React, { Component } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
 

class DarkModeButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false
    };
  }

  setIsDarkMode = () => this.setState({ isDarkMode: !this.state.isDarkMode});

  render() {
    return (
      <DarkModeToggle
        onChange={() => this.setIsDarkMode()}
        checked={this.state.isDarkMode}
        size={80}
      />
  );
  }
}

export default DarkModeButton
