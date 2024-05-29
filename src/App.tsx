import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import HomePage from "./Pages/Home/Home.page";
import LoginPage from "./Pages/Login/Login.page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
