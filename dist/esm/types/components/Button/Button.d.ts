import React, { HTMLAttributes } from "react";
import '../../css/button.css';
interface Props extends HTMLAttributes<HTMLButtonElement> {
    label: string;
}
declare const Button: React.FC<Props>;
export default Button;
