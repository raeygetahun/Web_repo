import Home from './page/Home'
import About from './page/About';
import Portfolio from './page/Portfolio';
import Timeline from './page/Timeline';
import { BrowserRouter, Link } from "react-router-dom";
import Container from "react-bootstrap/Container"
import { Route, Routes } from "react-router";
import React from "react";
import MyNav from './component/Navbar'

const App = () => {
  return (
      <React.Fragment>
      <BrowserRouter>
          <MyNav />
          <br /> <br />
          <div className="container-fluid">
              <Routes>
                  <Route path="/" exact element={<Home />} />
                  <Route path="/aboutT" exact element={<About />} />
                  <Route path="/portfolio" exact element={<Portfolio />} />
                  <Route path="/timeline" exact element={<Timeline />} />
              </Routes>
          </div>
      </BrowserRouter>
      <br /> <br /> <br />
    </React.Fragment>
  )
};

export default App;

