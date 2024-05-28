import "./Header.styles.css";

import { BsCart3 } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <h2 className="headerTitle">CLUB CLOTHING</h2>
        <div className="headerItems">
          <div className="headerItem">Explorar</div>
          <div className="headerItem">Login</div>
          <div className="headerItem">Criar conta</div>
          <div className="headerItem ">
            <BsCart3 size={25} />
            <span style={{ marginLeft: 5 }}>5</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
