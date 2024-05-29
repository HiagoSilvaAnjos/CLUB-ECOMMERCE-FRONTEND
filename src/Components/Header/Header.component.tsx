import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle,
} from "./Header.styles";
import "./Header.styles.css";

import { BsCart3 } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderTitle>CLUB CLOTHING</HeaderTitle>
        <HeaderItems>
          <HeaderItem>Explorar</HeaderItem>
          <HeaderItem>Login</HeaderItem>
          <HeaderItem>Criar conta</HeaderItem>
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
