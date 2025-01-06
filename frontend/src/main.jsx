import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import NotFound from "./components/NotFound.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AddBooster from "./components/Booster/AddBooster.jsx";
import AddPoison from "./components/Poison/AddPoison.jsx";
import AddRemedy from "./components/Remedy/AddRemedy.jsx";
import BoosterResult from "./components/Booster/BoosterResult.jsx";
import PoisonResult from "./components/Poison/PoisonResult.jsx";
import RemedyResult from "./components/Remedy/RemedyResult.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <div className="container-lg mb-5 pb-4">
      <Routes>
          {/* Remedies Routes */}
          <Route path="/remedy" element={<RemedyResult />} />
          <Route path="/remedy/delete" element={<RemedyResult />} />
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
