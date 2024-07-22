import React from "react";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import Herosec from "./components/Herosec";
import soldiers from "./components/images/soldiers.jpg"
import logo from "./components/images/logo.png";
import Newshome from "./components/Newshome";
import Scrollnews from "./components/Scrollnews";
import Footer from "./components/Footer";

const App = () => {

  return (
    <>
      <Styledbody>
        <Navbar logo={logo} />
        <Herosec image={soldiers} />
        <Newshome />
        <Scrollnews />
        <Footer img={logo}/>
      </Styledbody>
    </>
  );
}

const Styledbody = styled.div`
    body{
      margin: 0%;
      padding: 5px;
      box-sizing: border-box;
    }
`;

export default App;