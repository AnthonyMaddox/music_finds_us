import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <main>
          <Routes>
            <Route path="home" element={<Home />}></Route>
            <Route path="/" element={<Navigate to="/home" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
