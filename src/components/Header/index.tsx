import { useNavigate } from "react-router-dom"
import React from 'react'
import { Button } from '../Button';
import bannerImg from "../../assets/headerLogo.png"
import { IHeader } from "./types";
import { 
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
  Pointer
 } from './style'

const Header = ({autenticado}: IHeader) => {
  const navigate =  useNavigate();
  const handleClickSignIn = () => {
    navigate('/')
  }
  return (
    <Wrapper>
      <Container>
        <Row>
          <Pointer>
            <img src={bannerImg} alt="gato" onClick={handleClickSignIn}/>
          </Pointer>
            {autenticado ? (
              <>
                <BuscarInputContainer>
                  <Input placeholder='Buscar...'/>
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ) : null}
          
        </Row>
        <Row>
          {autenticado ?  (
            <UserPicture src='https://avatars.githubusercontent.com/u/72272327?v=4'/>
          ) : (
            <>
              <MenuRight href='#'>Home</MenuRight>
              <Button title='Entrar'/>
              <Button title='Cadastrar'/>
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }