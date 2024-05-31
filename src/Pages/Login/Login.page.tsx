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

import {
  AuthError,
  AuthErrorCodes,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import { auth, db, googleProvider } from "../../config/firebase.config";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

interface LoginForm {
  email: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<LoginForm>();

  const handleSubmitPress = async (data: LoginForm) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      console.log(userCredentials);
    } catch (error) {
      const _error = error as AuthError;

      if (_error.code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
        return setError("password", { type: "mismatch" });
      }
    }
  };

  const handleSignInWithGooglePress = async () => {
    try {
      const userCredentials = await signInWithPopup(auth, googleProvider);

      const querySnapshot = await getDocs(
        query(
          collection(db, "users"),
          where("id", "==", userCredentials.user.uid)
        )
      );

      const user = querySnapshot.docs[0]?.data();

      if (!user) {
        const firstName = userCredentials.user.displayName?.split(" ")[0];
        const lastName = userCredentials.user.displayName?.split(" ")[1];

        await addDoc(collection(db, "users"), {
          id: userCredentials.user.uid,
          email: userCredentials.user.email,
          firstName,
          lastName,
          provider: "Google",
        });
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <>
      <Header />

      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre com a sua conta</LoginHeadline>

          <CustomButton
            startIcon={<BsGoogle size={18} />}
            onClick={handleSignInWithGooglePress}
          >
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

            {errors.password?.type === "mismatch" && (
              <ErrorMessage>Senha inválida.</ErrorMessage>
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
