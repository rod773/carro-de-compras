import React, { Component } from "react";

const styles = {
  navbar: {
    display: "flex",
    flexDireccion: "row",
    alignItems: "center",
    high: "100px",
    justifyContent: "space-between",
    position: "relavive",
  },
};

export class Navbar extends Component {
  render() {
    return (
      <nav style={styles.navbar}>
        <p>Logo</p>
        <p>Carro</p>
      </nav>
    );
  }
}

export default Navbar;
