import React, { useState } from 'react'
import { 
  Container, Column, Row, Match,
  Header, Text, SmallHeader, Image,  
  Button, ButtonColumn, NextArrow, UserColumn,
  PrevArrow, BigText, MatchButton, Bio
} from './styles'
import { useQuery } from '@apollo/react-hooks'
import { ALL_USERS, USER_SONGS, USER_ARTISTS } from './graphql'

const Matches = () => {
  const {data: matches, loading, error} = useQuery(ALL_USERS)
  const {data: songs, loadingSongs, songError} = useQuery(USER_SONGS)
  const {data: artists, loadingArtists, artistError} = useQuery(USER_ARTISTS)
  const [currentMatch, updateMatch] = useState(0)

  if (matches) {
    console.log(matches.allUsers[0])
  }

  if (error) {
    return <p>Come back later!</p>
  }

  const match = (person) => {
    const id = person.id
    return (
        <Match>
            <Column>
                <Row>
                  <Image
                    src={person.imageurl}
                    alt='Avatar'
                  />
                  <UserColumn>
                    <SmallHeader>
                      {person.firstName}{' '}{person.lastName}
                    </SmallHeader>
                    <Text>
                      Age: {person.age}
                    </Text>
                    <Bio>
                      {person.bio}
                    </Bio>
                  </UserColumn>
                </Row>
                  <BigText>
                    Spotify Info
                  </BigText>
                  <Text>
                    Username: {person.username}
                  </Text>
                  {!songError && !loadingSongs && songs ? 
                    <Column>
                      <BigText>
                        Top Songs: 
                      </BigText>
                      <Row>
                        {songs.map((song) => <Text>{song.title}</Text>)}
                      </Row>
                    </Column> : 
                    <Row>
                      <BigText>
                        No song data
                      </BigText>
                    </Row>
                  }
                  {!artistError && !loadingArtists && artists ? 
                    <Column>
                      <BigText>
                        Top Artists: 
                      </BigText>
                      <Row>
                        {artists.map((artist) => <Text>{artist.name}</Text>)}
                      </Row>
                    </Column> : 
                    <Row>
                      <BigText>
                        No artist data
                      </BigText>
                    </Row>
                  }
            </Column>
          <MatchButton onClick={() => alert(person.phoneNumber)}>
            Match with {person.firstName}
          </MatchButton>
        </Match>
    )
  }

  //<SpotifyInfo /> ^ insert back in above

  const next = () => {
    if (currentMatch >= 0 && currentMatch < matches.allUsers.length - 1) {
      updateMatch(currentMatch + 1)
    }
  }

  const prev = () => {
    if (currentMatch > 0 && currentMatch < matches.allUsers.length) {
      updateMatch(currentMatch - 1)
    }
  }

  return (
    <Container>
      {!loading && matches ? 
        <Column>
        <Row>
          <ButtonColumn>
            {currentMatch > 0 ? 
              <Button onClick={prev}>
                <PrevArrow src='https://static.thenounproject.com/png/653965-200.png'/>
              </Button> : 
              <></>
            }
          </ButtonColumn>
          {match(matches.allUsers[currentMatch])}
          <ButtonColumn>
            {currentMatch < matches.allUsers.length - 1 ? 
              <Button onClick={next}>
                <NextArrow src='https://static.thenounproject.com/png/653965-200.png'/>
              </Button> : 
              <></>
            }
          </ButtonColumn>
        </Row>
        </Column> : 
        <Header>
          Loading...
        </Header>
      }
    </Container>
  )
}
export default Matches

