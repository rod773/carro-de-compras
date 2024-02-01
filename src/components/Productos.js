import React, { Component } from "react";
import { Producto } from "./Producto";

const styles = {
  productos: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
};

export class Productos extends Component {
  render() {
    const { productos, agregarAlCarro } = this.props;
    return (
      <div>
        {productos.map((producto) => (
          <Producto
            agregarAlCarro={agregarAlCarro}
            key={producto.name}
            producto={producto}
          />
        ))}
      </div>
    );
  }
}

export default Productos;
