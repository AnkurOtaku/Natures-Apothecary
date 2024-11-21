import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddRemedy from "./components/AddRemedy.jsx";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Result from "./components/Result.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <div className="container-lg">
        <Routes>
          <Route path="/" element={<Result />} />
          <Route path="/add" element={<AddRemedy />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>
);
