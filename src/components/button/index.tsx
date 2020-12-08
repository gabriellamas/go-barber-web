import React, { ButtonHTMLAttributes } from 'react';
import {  } from './styles';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

/**
    quando interface é vazio, ele vira apenas um type
    interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    
    }

 */

const Button: React.FC<ButtonProps> = ({children, ...rest}) =>(
    <Container type="button" {...rest}>
       {children}
    </Container>
);

export default Button;