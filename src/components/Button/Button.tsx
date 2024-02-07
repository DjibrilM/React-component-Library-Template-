import React, { HTMLAttributes } from "react";
interface Props extends HTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: React.FC<Props> = ({ label, ...props }) => {
  return <button {...props}>{label || "Button From Library"}</button>;
};

export default Button;
