import React from 'react'
import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './style'
const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src='https://i.ytimg.com/vi/knT5wmFnrsE/maxresdefault.jpg'/>
        <Content>
          <UserInfo>
            <UserPicture src='https://avatars.githubusercontent.com/u/72272327?v=4'/>
            <div>
              <h4>Gabriel Castro</h4>
              <p>Há 10 minutos</p>
            </div>
          </UserInfo>
          <PostInfo>
            <h4>Projeto para um curso de HTML e Css</h4>
            <p>Projeto feito o curso de HTML e CSS no bootcamp dio do Global avande... <strong>Saiba Mais</strong></p>
          </PostInfo>
          <HasInfo>
            <h4>#HTML #CSS #Javascript</h4>
          </HasInfo>
        </Content>
      </CardContainer>
  )
}

export { Card }