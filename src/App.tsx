import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext, useState } from "react";

import "./App.css";

import HomePage from "./Pages/Home/Home.page";
import LoginPage from "./Pages/Login/Login.page";
import SignUpPage from "./Pages/Sign-up/Sign-up.page";
import ExplorePage from "./Pages/Explore/Explore.page";
import CategoryDetailsPage from "./Pages/Category-details/Category-details.page";

import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./config/firebase.config";
import { UserContext } from "./contexts/user.context";
import { collection, getDocs, query, where } from "firebase/firestore";
import { userConverter } from "./converters/firestore.converter";

import LoadingComponent from "./Components/Loading/Loading.component";
import Cart from "./Components/Cart/Cart.component";
import CheckoutPage from "./Pages/Checkout/Checkout.page";

function App() {
  const [isInitialized, setIsInitialized] = useState(true);
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext);

  onAuthStateChanged(auth, async (user) => {
    const isSigninOut = isAuthenticated && !user;
    if (isSigninOut) {
      logoutUser();
      return setIsInitialized(false);
    }

    const isSigninIn = !isAuthenticated && user;
    if (isSigninIn) {
      const querySpanshot = await getDocs(
        query(
          collection(db, "users").withConverter(userConverter),
          where("id", "==", user.uid)
        )
      );

      const userFormFirestore = querySpanshot.docs[0]?.data();

      loginUser(userFormFirestore);
      return setIsInitialized(false);
    }

    return setIsInitialized(false);
  });

  if (isInitialized) {
    return <LoadingComponent />;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/category/:id" element={<CategoryDetailsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <Cart />
      </BrowserRouter>
    </>
  );
}

export default App;
