import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from '../../services/api';

import { useNavigate } from "react-router-dom";
import imgEmail from "../../assets/imgEmail.png";
import imgSenha from "../../assets/imgSenha.png";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import 
{ 
  Container, 
  Title, 
  Column, 
  CriarText, 
  EsqueciText,
  Row,
  SubTitleLogin,
  TitleLogin, 
  Wrapper 
} 
from "./style";
import { IFormData } from "./types.js";

const schema = yup.object({
  email: yup.string().email('email não é valido').required('Campo obrigatório'),
  password: yup.string().min(3,'No minimo 3 caracteres').required('Campo obrigatório'),
}).required();

const Login = () => {  
  const navigate =  useNavigate();

  const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  
  const onSubmit = async (formData: IFormData) => {
    try {
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
      if(data.length === 1) {
        navigate('/feed')
      } else {
        alert('Email ou senha invalidos')
      }
    } catch {
      alert('Houve um erro, tente novamente!')
    }
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input name='email' errorMessage={errors?.email?.message} control={control}  placeholder="E-mail" leftIcon={<img src={imgEmail} alt="BixoTerrariaxd"/>}/>
              <Input name='password' errorMessage={errors?.password?.message} control={control}  placeholder="Senha" leftIcon={<img src={imgSenha} alt="BixoTerrariaxd"/>}/>
              <Button type="submit" title="Entrar" variant="secondary" />
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