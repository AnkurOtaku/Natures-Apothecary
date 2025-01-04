import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddRemedy from "./components/AddRemedy.jsx";
import AddBooster from "./components/AddBooster.jsx";
import AddPoison from "./components/AddPoison.jsx";
import Navbar from "./components/Navbar.jsx";
import Result from "./components/Result.jsx";
import BoosterResult from "./components/BoosterResult.jsx";
import PoisonResult from "./components/PoisonResult.jsx";
import NotFound from "./components/NotFound.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <div className="container-lg mb-5 pb-4">
      <Routes>
          {/* Remedies Routes */}
          <Route path="/remedy" element={<Result />} />
          <Route path="/remedy/delete" element={<Result />} />
          <Route path="/remedy/add" element={<AddRemedy />} />
          <Route path="/remedy/update" element={<AddRemedy />} />

          {/* Boosters Routes */}
          <Route path="/booster" element={<BoosterResult />} />
          <Route path="/booster/delete" element={<BoosterResult />} />
          <Route path="/booster/add" element={<AddBooster />} />
          <Route path="/booster/update" element={<AddBooster />} />
          
          {/* Poisons Routes */}
          <Route path="/poison" element={<PoisonResult />} />
          <Route path="/poison/delete" element={<PoisonResult />} />
          <Route path="/poison/add" element={<AddPoison />} />
          <Route path="/poison/update" element={<AddPoison />} />

          {/* Catch-All Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>
);
