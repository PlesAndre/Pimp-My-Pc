import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import AllSetups from "./components/all_setups/AllSetups";
import AllComponents from "./components/all_components/AllComponents";
import SingleComponent from "./components/single_component/SingleComponent";
import SingleSetup from "./components/single_setup/SingleSetup";
import AddComponent from "./components/add_component/AddComponent";
import AddSetup from "./components/add_setup/addSetup";
import "./App.css";
import { CartProvider } from "./context/context";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/setups" element={<AllSetups />} />
          <Route path="/setups/:id" element={<SingleSetup />} />
          <Route path="/components" element={<AllComponents />} />
          <Route path="/components/:id" element={<SingleComponent />} />
          <Route path="/add-component" element={<AddComponent />} />
          <Route path="/add-setup" element={<AddSetup />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
