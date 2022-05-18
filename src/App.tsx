import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Mint from "./mint/Mint";
import General from "./General/General";

import "../src/files/assets/css/customStyle.css";
import "../src/files/assets/css/style.css";
import "../src/files/assets/css/vendor.bundle.css";


class App extends React.Component {
  render() {
    // return (
    //   <div className="App">
    //     <Mint />
    //     {/* <Dev /> */}
    //   </div>
    // );

    return (
      <Router>
        <Routes>
          <Route path="/" element={<General />} />
          <Route path="/mint" element={<Mint />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
