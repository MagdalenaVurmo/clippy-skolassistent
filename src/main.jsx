import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import App from "./App.jsx";
import StartPage from "./pages/StartPage.jsx";
import KurserPage from "./pages/KurserPage.jsx";
import MessagePage from "./pages/MessagePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

import "./styles/main.scss";
import "./styles/MessagePage.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
  <Route path="/" element={<App />}>
    <Route index element={<StartPage />} />
    <Route path="kurser" element={<KurserPage />} />
    <Route path="kontakt" element={<ContactPage />} />
    <Route path="meddelanden" element={<MessagePage />} /> {/* HÄR */}
  </Route>
</Routes>
    </BrowserRouter>
  </React.StrictMode>
);
