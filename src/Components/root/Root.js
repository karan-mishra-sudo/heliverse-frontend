import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, useEffect } from "react";
import LoginOption from "./LoginOption";
import FoodManagerLogin from "../Hospital-Food-Manager/FoodManagerLogin";
import DeliveryLogin from "../Delivery-Personnel/DeliveryLogin";
import PantryLogin from '../Inner-Pantry-Staff/PantryLogin';
import DeliveryDashboard from "../Delivery-Personnel/DeliveryDashboard";
import PantryDashboard from "../Inner-Pantry-Staff/PantryDashboard"
import FoodManagerDashboard from "../Hospital-Food-Manager/FoodManagerDashboard"
export default function Root() {
  return (

    <Suspense fallback={<h>Loding</h>}>
      <Routes>
        <Route path="/" element={<LoginOption />} />
        <Route path="/Food-manager-login" element={<FoodManagerLogin />} />
        <Route path="/Delivery-login" element={<DeliveryLogin />} />
        <Route path="/Pantry-login" element={<PantryLogin />} />
        <Route path="/Dashboard-pantry" element={<PantryDashboard />} />
        <Route path="/Dashboard-delivery" element={<DeliveryDashboard />} />
        <Route path="/Dashboard-FoodManager" element={<FoodManagerDashboard />} />
        <Route path="/" element={<LoginOption />} />
        <Route path="/" element={<LoginOption />} />

      </Routes>
    </Suspense>

  );
}
