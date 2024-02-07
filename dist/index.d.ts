import React, { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {
    label: string;
}
declare const Button: React.FC<Props>;

export { Button };
