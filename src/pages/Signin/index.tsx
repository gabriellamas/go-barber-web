import React from 'react';
import LogoImg from '../../assets/logo.svg';
import Input from '../../components/input';
import Button from '../../components/button';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = ()=>(
    <Container>
        <Content>
            <img src={LogoImg} alt="GoBarber"/>

            <form>
                <h1>Faça seu logon</h1>

                <Input name="email" icon={FiMail} placeholder="e-mail"/>

                <Input name="password" icon={FiLock}  type="password" placeholder="senha"/>

                <Button>Entrar</Button>

                <a href="forgot">Esqueci minha senha</a>
            </form>

            <a href="login">
                <FiLogIn />
                Criar conta
            </a>
        </Content>

        <Background />
    </Container>
);

export default SignIn;