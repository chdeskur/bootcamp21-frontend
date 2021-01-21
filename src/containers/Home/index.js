import React, { useState } from 'react'
import { 
  Container, Column, Row, Match,
  Header, Text, Frame, Compatible,
  SmallHeader, Image, 
  KindaCompatible, NotCompatible, 
  Button, ButtonColumn, NextArrow, 
  PrevArrow
} from './styles'


const Home = () => {
  const [currentMatch, updateMatch] = useState(0)
  const matches = [
      {
        fullName: 'Joe Oh',
        bio: 'Joe goes to college and likes booze',
        compatability: 80
      },
      {
        fullName: 'Blah Blah',
        bio: 'Blah likes music and writing really long bios blah blah blah blah blah blah blah blah blah blahblah',
        compatability: 3
      },
      {
        fullName: 'Catherine Deskur',
        bio: '',
        compatability: 56
      }
  ]

  const compat = (number) => {
    if (number >= 80) {
      return <Compatible>{number}%</Compatible>
    } else if (number >= 50) {
      return <KindaCompatible>{number}%</KindaCompatible>
    } else {
      return <NotCompatible>{number}%</NotCompatible>
    }
  }

  const match = (person) => {
    return (
      <Match>
          <Row>
            <Column>
              <Row>
                <Image
                  src='https://i2.cdn.turner.com/cnn/2010/TECH/social.media/11/24/facebook.profile.shots.netiquette/t1larg.man.beer.jpg'
                  alt='Avatar'
                />
                <Column>
                  <SmallHeader>
                    {person.fullName}
                  </SmallHeader>
                  <Text>
                    {person.bio}
                  </Text>
                </Column>
              </Row>
              <SmallHeader>
                Spotify Info
              </SmallHeader>
              <Row>
                <Text>
                  Your Spotify Compatability: 
                </Text>
                {person.compatability ? compat(person.compatability) : <NotCompatible>No data</NotCompatible>}
              </Row>
              <Frame
                src="https://open.spotify.com/embed/playlist/37i9dQZEVXcVFoZvR0OgOZ" 
                allowtransparency="true" allow="encrypted-media"
              />
            </Column>
          </Row>
        </Match>
    )
  }

  const next = () => {
    if (currentMatch >= 0 && currentMatch < matches.length - 1) {
      updateMatch(currentMatch + 1)
    }
  }

  const prev = () => {
    if (currentMatch > 0 && currentMatch < matches.length) {
      updateMatch(currentMatch - 1)
    }
  }

  return (
    <Container>
      <Column>
        <Header>
          Example Match
        </Header>
        <Row>
          <ButtonColumn>
            <Button onClick={prev}>
              <PrevArrow src='https://static.thenounproject.com/png/653965-200.png'/>
            </Button>
          </ButtonColumn>
          {match(matches[currentMatch])}
          <ButtonColumn>
            <Button onClick={next}>
              <NextArrow src='https://static.thenounproject.com/png/653965-200.png'/>
            </Button>
          </ButtonColumn>
        </Row>
      </Column>
    </Container>
  )
}
export default Home
//export default Home

