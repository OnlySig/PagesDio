//import { Link } from "react-router-dom"
//import bannerImage from "../../assets/imgHome.jpg"
//import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Card } from "../../components/Card"
import { UserInfo } from "../../components/UserInfo"
import { Container, Column, Title, TitleHighligt } from "./style"

const Feed = () => {
  return(
    <>
    <Header autenticado={true}/>
    <Container>
      <Column flex={3}>
        <Title>Feed</Title>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Column>
      <Column flex={1}>
        <TitleHighligt># RANKING 5 TOP DA SEMANA</TitleHighligt>
        <UserInfo percentual={90} nome="Robison" imagem='https://avatars.githubusercontent.com/u/72272327?v=4'/>
        <UserInfo percentual={55} nome="Robison" imagem='https://avatars.githubusercontent.com/u/72272327?v=4'/>
        <UserInfo percentual={70} nome="Robison" imagem='https://avatars.githubusercontent.com/u/72272327?v=4'/>
        <UserInfo percentual={50} nome="Robison" imagem='https://avatars.githubusercontent.com/u/72272327?v=4'/>
        <UserInfo percentual={30} nome="Robison" imagem='https://avatars.githubusercontent.com/u/72272327?v=4'/>
      </Column>
    </Container>
    </>
  )
}

export { Feed }