import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Routes, Route } from "react-router";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useDebugValue, useEffect } from "react";
import { setWindowHeight } from "./store/statusSlice";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <Navbar />
              <Hero />
              <Main />
              <Footer />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="*"
          element={
            <h1
              style={{
                position: "absolute",
                left: "5rem",
                marignTop: "5rem",
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            >
              Not found
            </h1>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
