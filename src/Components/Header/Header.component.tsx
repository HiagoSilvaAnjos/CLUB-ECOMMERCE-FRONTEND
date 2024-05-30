import { useNavigate } from "react-router-dom";

import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle,
} from "./Header.styles";

import { BsCart3 } from "react-icons/bs";

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <>
      <HeaderContainer>
        <HeaderTitle>CLUB CLOTHING</HeaderTitle>
        <HeaderItems>
          <HeaderItem>Explorar</HeaderItem>
          <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
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
