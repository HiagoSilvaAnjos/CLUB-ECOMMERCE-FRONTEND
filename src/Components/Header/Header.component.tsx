import { useNavigate } from "react-router-dom";

import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle,
} from "./Header.styles";

import { BsCart3 } from "react-icons/bs";
import { auth } from "../../config/firebase.config";
import { signOut } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();

  const handleExplorerClick = () => {
    navigate("/");
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
        <HeaderTitle onClick={handleExplorerClick}>CLUB CLOTHING</HeaderTitle>
        <HeaderItems>
          <HeaderItem onClick={handleExplorerClick}>Explorar</HeaderItem>
          <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
          <HeaderItem onClick={() => signOut(auth)}>Sair</HeaderItem>
          <HeaderItem onClick={handleSignUpClick}>Criar conta</HeaderItem>
          <HeaderItem>
            <BsCart3 size={25} />
            <span style={{ marginLeft: 5 }}>5</span>
          </HeaderItem>
        </HeaderItems>
      </HeaderContainer>
    </>
  );
};

export default Header;
