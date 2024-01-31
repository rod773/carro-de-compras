import "./App.css";
import { Component } from "react";
import Productos from "./components/Productos";

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
        <Productos
          agragarAlCarro={() => {
            console.log("no hace nada");
          }}
          productos={this.state.peoductos}
        />
      </div>
    );
  }
}

export default App;
