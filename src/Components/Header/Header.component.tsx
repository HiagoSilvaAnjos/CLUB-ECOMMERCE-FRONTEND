import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle,
} from "./Header.styles";

import { BsCart3 } from "react-icons/bs";
import { auth } from "../../config/firebase.config";
import { signOut } from "firebase/auth";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

const Header = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useContext(UserContext);
  const { toggleCart } = useContext(CartContext);

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleExplorerClick = () => {
    navigate("/explore");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <>
      <HeaderContainer>
        <HeaderTitle onClick={handleHomeClick}>CLUB CLOTHING</HeaderTitle>
        <HeaderItems>
          <HeaderItem onClick={handleExplorerClick}>Explorar</HeaderItem>
          {!isAuthenticated && (
            <>
              <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
              <HeaderItem onClick={handleSignUpClick}>Criar conta</HeaderItem>
            </>
          )}
          {isAuthenticated && (
            <HeaderItem onClick={() => signOut(auth)}>Sair</HeaderItem>
          )}
          <HeaderItem onClick={toggleCart}>
            <BsCart3 size={25} />
            <span style={{ marginLeft: 5 }}>5</span>
          </HeaderItem>
        </HeaderItems>
      </HeaderContainer>
    </>
  );
};

export default Header;
