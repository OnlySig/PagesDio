import React from 'react'
import { Link } from "react-router-dom";
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Column, StyleSpan, StyledRegister, StyledInput, StyledButton, StyledSpan, StyledLink } from './style'

const Register = () => {

  return (
    <>
    <Header/>
      <Column>
        <StyleSpan>
          <div>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</div>
        </StyleSpan>
        <StyledRegister>
          <h1>Comece agora grátis</h1>
          <span>Crie sua conta e make the change._</span>
          <StyledInput>
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </StyledInput>
          <StyledButton>
            <Button title='Criar minha Conta' variant='secondary'/>
          </StyledButton>
          <StyledSpan>
          <span>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</span>
          </StyledSpan>
           <StyledLink>
            Ja tenho conta. <Link style={{ textDecoration: 'none' }} to="/login">Fazer login</Link>
           </StyledLink>
        </StyledRegister>
      </Column>
    </>
  )
}

export { Register }