import React, { Component } from "react";
import { Logo } from "./Logo";

const styles = {
  navbar: {
    display: "flex",
    flexDireccion: "row",
    alignItems: "center",
    high: "100px",
    justifyContent: "space-between",
    position: "relative",
    padding: "0 50px",
    boxShadow: "0 2px 3px rgb(0,0,0,0.1)",
  },
};

export class Navbar extends Component {
  render() {
    return (
      <nav style={styles.navbar}>
        <Logo />
        <p>Carro</p>
      </nav>
    );
  }
}

export default Navbar;
