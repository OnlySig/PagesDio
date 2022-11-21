import { useNavigate } from "react-router-dom"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Container, TextContent, Title, TitleHighligt } from "./style"
import bannerImage from "../../assets/imgHome.jpg"

const Home = () => {
  const navigate =  useNavigate();
  const handleClickSignIn = () => {
    navigate('/login')
  }
  return(
    <>
    <Header/>
    <Container>
      <div>
        <Title>
          <TitleHighligt>
          Implemente
          <br/>
          </TitleHighligt>
          o seu futuro global agora!
        </Title>
        <TextContent>
          Domine as tecnologias Utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
        </TextContent>
        <Button title='Começar agora' variant="secundary" onClick={handleClickSignIn}/>
      </div>
      <div>
        <img src={bannerImage} alt="cachorro" />
      </div>
    </Container>
    </>
  )
}

export { Home }