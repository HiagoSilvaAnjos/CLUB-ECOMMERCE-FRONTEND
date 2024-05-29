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

          {/* Button */}

          <LoginSubtitle>Ou entre com seu email </LoginSubtitle>

          <LoginInputContainer>{/* Email input */}</LoginInputContainer>
          <LoginInputContainer>{/* Password input */}</LoginInputContainer>

          {/* Button */}
        </LoginContent>
      </LoginContainer>
    </>
  );
};

export default LoginPage;
