import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/user.context";
import { useNavigate } from "react-router-dom";
import LoadingComponent from "../Components/Loading/Loading.component";
import Header from "../Components/Header/Header.component";

interface AuthenticationGuardProps {
  children: React.ReactNode;
}

const AuthenticationGuard = ({ children }: AuthenticationGuardProps) => {
  const { isAuthenticated } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <LoadingComponent message="Você precisa estar logado para acessar esta página. Você será redirecionado para a página de Login..." />
      </>
    );
  }

  return <>{children}</>;
};

export default AuthenticationGuard;
