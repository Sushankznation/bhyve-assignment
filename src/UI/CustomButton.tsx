import React, { ReactNode } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

interface CustomButtonProps extends ButtonProps {
  children: ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  ...rest
}: CustomButtonProps) => {
  return (
    <Button variant="solid" size="lg" {...rest}>
      {children}
    </Button>
  );
};

export default CustomButton;
