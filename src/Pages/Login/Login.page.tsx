import { BsGoogle } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";

import CustomButton from "../../Components/CustomButtton/CustomButton.component";
import Header from "../../Components/Header/Header.component";

import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle,
} from "./Login.styles";

const LoginPage = () => {
  return (
    <>
      <Header />
      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre com a sua conta</LoginHeadline>

          <CustomButton startIcon={<BsGoogle size={18} />}>
            Entrar com o Google
          </CustomButton>

          <LoginSubtitle>Ou entre com seu email </LoginSubtitle>

          <LoginInputContainer>{/* Email input */}</LoginInputContainer>
          <LoginInputContainer>{/* Password input */}</LoginInputContainer>

          <CustomButton startIcon={<FiLogIn size={18} />}>Entrar</CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  );
};

export default LoginPage;
