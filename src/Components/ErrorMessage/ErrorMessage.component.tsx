import { InputErrorMessageContainer } from "./ErrorMessage.component.styles";

interface ErrorMessageProps {
  children: React.ReactNode;
}

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return (
    <>
      <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
    </>
  );
};

export default ErrorMessage;
