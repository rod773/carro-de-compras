import "./App.css";
import { Component } from "react";
import Productos from "./components/Productos";
import Images from "./assets/Images";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Navbar from "./components/Navbar";

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
        <Navbar />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={() => {
              console.log("no hace nada");
            }}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
