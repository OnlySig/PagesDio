import { useNavigate } from "react-router-dom"
import imgEmail from "../../assets/imgEmail.png"
import imgSenha from "../../assets/imgSenha.png"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Container, Title, Column, CriarText, EsqueciText, Row, SubTitleLogin, TitleLogin, Wrapper } from "./style"

const Login = () => {  
  const navigate =  useNavigate();
  const handleClickSignIn = () => {
    navigate('/feed')
  }
  return(
    <>
      <Header/>
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.           
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
            <form action="">
              <Input placeholder="E-mail" leftIcon={<img src={imgEmail} alt="BixoTerrariaxd"/>}/>
              <Input placeholder="Senha" leftIcon={<img src={imgSenha} alt="BixoTerrariaxd"/>}/>
              <Button type="button" title="Entrar" variant="secondary" onClick={handleClickSignIn}/>
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}

export { Login }