import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    peoductos: [
      {
        name: "Tomate",
        price: 1500,
        img: "/productos/tomate.jpg",
      },
      {
        name: "Arbejas",
        price: 2500,
        img: "/productos/arbejas.jpg",
      },
      {
        name: "Lechuga",
        price: 500,
        img: "/productos/lechuga.jpg",
      },
    ],
  };

  render() {
    return (
      <div>
        <h1>Carro De Compras</h1>
      </div>
    );
  }
}

export default App;
