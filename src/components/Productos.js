import React, { Component } from "react";
import { Producto } from "./Producto";

export class Productos extends Component {
  render() {
    const { productos, agragarAlCarro } = this.props;
    return (
      <div>
        {productos.map((producto) => {
          <Producto />;
        })}
      </div>
    );
  }
}

export default Productos;
