import React, { Component } from "react";

export class Producto extends Component {
  render() {
    const { producto } = this.props;
    return (
      <div>
        <img src={producto.img} alt={producto.name} />
      </div>
    );
  }
}

export default Producto;
