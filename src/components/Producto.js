import React, { Component } from "react";
import { Button } from "./Button";

const styles = {
  producto: {
    border: "solid 1px #eee",
    boxShadow: "0 5px 5px rgb(0,0,0,0.1)",
    width: "30%",
    padding: "10px 15px",
    borderRadius: "15px",
  },
  img: {
    width: "100%",
  },
};

export class Producto extends Component {
  render() {
    const { producto, agregarAlCarro } = this.props;
    return (
      <div style={styles.producto}>
        <img style={styles.img} src={producto.img} alt={producto.name} />
        <h3>{producto.name}</h3>
        <p>{producto.price}</p>
        <Button onClick={() => agregarAlCarro(producto)}>
          Agregar al carro
        </Button>
      </div>
    );
  }
}

export default Producto;
