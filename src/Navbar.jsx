import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#1976d2",
          color: "white",
          padding: "15px",
          textAlign: "center",
        }}
      >
        <h2>Smart Campus Lost & Found</h2>
      </div>
    );
  }
}

export default Navbar;