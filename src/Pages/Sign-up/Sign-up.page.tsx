import { FiLogIn } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { isEmail } from "validator";
import {
  AuthError,
  AuthErrorCodes,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

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

import { auth, db } from "../../config/firebase.config";

interface SignUpForm {
  firstName: string;
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
    setError,
    watch,
  } = useForm<SignUpForm>();

  const watchPassword = watch("password");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmitPress = async (data: SignUpForm) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await addDoc(collection(db, "users"), {
        id: userCredentials.user.uid,
        firstName: data.firstName,
        lastName: data.lastName,
        email: userCredentials.user.email,
      });
    } catch (error) {
      const _error = error as AuthError;

      if (_error.code === AuthErrorCodes.EMAIL_EXISTS) {
        return setError("email", { type: "email-already-in-use" });
      }
    }
  };

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
              {...register("firstName", { required: true })}
              $hasError={!!errors.firstName}
            />

            {errors.firstName?.type === "required" && (
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

            {errors.email?.type === "email-already-in-use" && (
              <ErrorMessage>Este e-mail já esta sendo utilizado.</ErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Senha</p>
            <CustomInput
              placeholder="Digite sua senha"
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              $hasError={!!errors.password}
            />

            {errors.password?.type === "required" && (
              <ErrorMessage>A senha é obrigatória.</ErrorMessage>
            )}

            {errors.password?.type === "minLength" && (
              <ErrorMessage>
                A sua senha precisa conter no mínimo 6 caracteres.
              </ErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Comfirmação de senha</p>
            <CustomInput
              placeholder="Comfirme sua senha"
              type="password"
              {...register("passwordConfirmation", {
                required: true,
                minLength: 6,
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

            {errors.password?.type === "minLength" && (
              <ErrorMessage>
                A sua senha precisa conter no mínimo 6 caracteres.
              </ErrorMessage>
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
