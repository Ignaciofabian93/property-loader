import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Properties from "./pages/Properties";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/propiedades" Component={Properties} />
        </Routes>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
