import "./App.css";
import { Component } from "react";
import Productos from "./components/Productos";
import Images from "./productos/Images";

class App extends Component {
  state = {
    peoductos: [
      {
        name: "Tomate",
        price: 1500,
        img: Images.tomate,
      },
      {
        name: "Arbejas",
        price: 2500,
        img: Images.arbejas,
      },
      {
        name: "Lechuga",
        price: 500,
        img: Images.lachuga,
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
