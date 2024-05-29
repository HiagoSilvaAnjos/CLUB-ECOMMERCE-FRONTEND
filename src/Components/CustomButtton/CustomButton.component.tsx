import { ButtonHTMLAttributes } from "react";

import { CustomButtonContainer, IconContainer } from "./CustomButton.styles";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  startIcon?: React.ReactNode;
}

const CustomButton = ({ children, startIcon, ...rest }: CustomButtonProps) => {
  return (
    <>
      <CustomButtonContainer {...rest}>
        {startIcon && <IconContainer>{startIcon}</IconContainer>}
        {children}
      </CustomButtonContainer>
    </>
  );
};

export default CustomButton;
