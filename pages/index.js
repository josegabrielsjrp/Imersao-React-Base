import { urlObjectKeys } from 'next/dist/next-server/lib/utils'
import styled from 'styled-components'
import db from "../db.json"
import Widget from "../src/components/Widget"
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

//const BackgroundImage = styled.div`
//  background-image: url(${db.bg});
//  flex: 1;
//  background-size: cover;
//  background-position: center;
//`;


export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Python uma linguagem para todos.</h1>
          </Widget.Header>

          <Widget.content>
            <p>Uma linguagem simples, dinâmica e poderosa</p>
          </Widget.content>
        </Widget>

        <Widget>
          <Widget.content>
            <h1>Quizes da galera.</h1>

            <p>Vai dar certo</p>
          </Widget.content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/josegabrielsjrp"/>
    </QuizBackground>

  )
}
