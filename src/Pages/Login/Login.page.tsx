import { BsGoogle } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";

import CustomButton from "../../Components/CustomButtton/CustomButton.component";
import Header from "../../Components/Header/Header.component";
import CustomInput from "../../Components/CustomInput/CustomInput.component";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage.component";

import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle,
} from "./Login.styles";

import { useForm } from "react-hook-form";
import { isEmail } from "validator";

interface LoginForm {
  email: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginForm>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmitPress = (data: any) => {
    console.log({ data });
  };

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

          <LoginInputContainer>
            <p>E-mail</p>
            <CustomInput
              placeholder="Digite seu e-mail"
              $hasError={!!errors.email}
              {...register("email", {
                required: true,
                validate: (value) => {
                  return isEmail(value);
                },
              })}
            />
            {errors.email?.type === "required" && (
              <ErrorMessage>O e-mail é obrigatório.</ErrorMessage>
            )}

            {errors.email?.type === "validate" && (
              <ErrorMessage>Por Favor, insira um e-mail válido.</ErrorMessage>
            )}
          </LoginInputContainer>

          <LoginInputContainer>
            <p>Senha</p>
            <CustomInput
              type="password"
              $hasError={!!errors.password}
              placeholder="Digite sua senha"
              {...register("password", { required: true })}
            />

            {errors.password?.type === "required" && (
              <ErrorMessage>A senha é obrigatória.</ErrorMessage>
            )}
          </LoginInputContainer>

          <CustomButton
            startIcon={<FiLogIn size={18} />}
            onClick={() => handleSubmit(handleSubmitPress)()}
          >
            Entrar
          </CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  );
};

export default LoginPage;
