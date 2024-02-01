import "./App.css";
import { Component } from "react";
import Productos from "./components/Productos";
import Images from "./assets/Images";

class App extends Component {
  state = {
    productos: [
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
          productos={this.state.productos}
        />
      </div>
    );
  }
}

export default App;
