import { InputHTMLAttributes } from "react";

import { CustomInputContainer } from "./CustomInput.styles";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

const CustomInput = ({ hasError, ...rest }: CustomInputProps) => {
  return <CustomInputContainer {...rest} hasError={hasError} />;
};

export default CustomInput;
