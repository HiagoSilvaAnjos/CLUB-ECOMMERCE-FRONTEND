import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";

import "./App.css";

import HomePage from "./Pages/Home/Home.page";
import LoginPage from "./Pages/Login/Login.page";
import SignUpPage from "./Pages/Sign-up/Sign-up.page";

import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./config/firebase.config";
import { UserContext } from "./contexts/user.context";
import { collection, getDocs, query, where } from "firebase/firestore";

function App() {
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext);

  onAuthStateChanged(auth, async (user) => {
    const isSigninOut = isAuthenticated && !user;
    if (isSigninOut) {
      return logoutUser();
    }

    const isSigninIn = !isAuthenticated && user;
    if (isSigninIn) {
      const querySpanshot = await getDocs(
        query(collection(db, "users"), where("id", "==", user.uid))
      );

      const userFormFirestore = querySpanshot.docs[0]?.data();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return loginUser(userFormFirestore as any);
    }
  });

  console.log(isAuthenticated);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
