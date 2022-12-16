import React, { Component } from "react";
import "../Styles/Home.css";
import Form from "./Form";
class Home extends Component {
  render() {
    return (
      <div className="homeDiv">
        <h3>The Music That Finds Us</h3>
        {/* <div className="quoteDiv">
          No matter how far we dive into the vast world of sound or how
          arduously we strain our ears, the songs that hammer our brains and
          pull at our heart strings seem to come out of absolute nowhere. For it
          is not us that finds the music, it is the music that finds us....{" "}
        </div> */}
        <Form />
      </div>
    );
  }
}

export default Home;
