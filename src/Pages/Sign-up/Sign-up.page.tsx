import { FiLogIn } from "react-icons/fi";

import CustomButton from "../../Components/CustomButtton/CustomButton.component";
import CustomInput from "../../Components/CustomInput/CustomInput.component";
import Header from "../../Components/Header/Header.component";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage.component";

import {
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SignUpInputContainer,
} from "./Sign-up.styles";

import { useForm } from "react-hook-form";
import { isEmail } from "validator";

interface SignUpForm {
  name: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const SignUpPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<SignUpForm>();

  const watchPassword = watch("password");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmitPress = (data: any) => {
    console.log({ data });
  };

  console.log(errors);

  return (
    <>
      <Header />

      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>Crie sua Conta</SignUpHeadline>

          <SignUpInputContainer>
            <p>Nome</p>
            <CustomInput
              placeholder="Digite seu nome"
              {...register("name", { required: true })}
              $hasError={!!errors.name}
            />

            {errors.name?.type === "required" && (
              <ErrorMessage>O nome é obrigatório.</ErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Sobrenome</p>
            <CustomInput
              placeholder="Digite seu sobrenome"
              {...register("lastName", { required: true })}
              $hasError={!!errors.lastName}
            />

            {errors.lastName?.type === "required" && (
              <ErrorMessage>O sobrenome é obrigatório.</ErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>E-mail</p>
            <CustomInput
              placeholder="Digite seu E-mail"
              {...register("email", {
                required: true,
                validate: (value) => {
                  return isEmail(value);
                },
              })}
              $hasError={!!errors.email}
            />

            {errors.email?.type === "required" && (
              <ErrorMessage>O e-mail é obrigatório.</ErrorMessage>
            )}

            {errors.email?.type === "validate" && (
              <ErrorMessage>Por favor, insira um e-mail válido.</ErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Senha</p>
            <CustomInput
              placeholder="Digite sua senha"
              type="password"
              {...register("password", { required: true })}
              $hasError={!!errors.password}
            />

            {errors.password?.type === "required" && (
              <ErrorMessage>A senha é obrigatória.</ErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Comfirmação de senha</p>
            <CustomInput
              placeholder="Comfirme sua senha"
              type="password"
              {...register("passwordConfirmation", {
                required: true,
                validate: (value) => {
                  return value === watchPassword;
                },
              })}
              $hasError={!!errors.passwordConfirmation}
            />

            {errors.passwordConfirmation?.type === "required" && (
              <ErrorMessage>Você precisa comfirmar sua senha.</ErrorMessage>
            )}

            {errors.passwordConfirmation?.type === "validate" && (
              <ErrorMessage>As senhas precisam ser idênticas.</ErrorMessage>
            )}
          </SignUpInputContainer>

          <CustomButton
            startIcon={<FiLogIn size={18} />}
            onClick={() => handleSubmit(handleSubmitPress)()}
          >
            Criar conta
          </CustomButton>
        </SignUpContent>
      </SignUpContainer>
    </>
  );
};

export default SignUpPage;
