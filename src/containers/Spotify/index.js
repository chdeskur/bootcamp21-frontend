import React, { useEffect, useState } from "react"
import hash from "./hash"
import { authEndpoint, clientId, redirectUri, scopes } from "../../config"
import * as $ from "jquery"
import { Container, Row, BigText, Text, LoginButton } from './styles'

const SpotifyInfo = () => {
  const [token, setToken] = useState(null)
  const [no_data, noData] = useState(false)
  const [username, setName] = useState('')
  const [topSongs, setSongs] = useState([])
  const [topArtists, setArtists] = useState([])

  const getUser = (token) => {
    return $.ajax({
      url: 'https://api.spotify.com/v1/me/',
      type: "GET", 

      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token)
      },
      success: data => {
        // Checks if the data is not empty
        if(!data) {
          noData(true)
          return
        }

        setName(data.display_name)
      }
    })
  }
  
  const getSongs = (token) => {
    return $.ajax({
      url: 'https://api.spotify.com/v1/me/top/tracks?limit=5',
      type: "GET", 

      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token)
      },
      success: data => {
        // Checks if the data is not empty
        if(!data) {
          noData(true)
          return
        }

        setSongs(data.items)
      }
    })
  }

  const getArtist = (token) => {
    return $.ajax({
      url: 'https://api.spotify.com/v1/me/top/artists?limit=5',
      type: "GET", 

      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token)
      },
      success: data => {
        // Checks if the data is not empty
        if(!data) {
          noData(true)
          return
        }

        setArtists(data.items)
      }
    })
  }

  useEffect(() => {
    // Set token
    let _token = hash.access_token
    
    if (_token) {
      // Set token
      setToken(_token)
      getUser(_token)
      getSongs(_token)
      getArtist(_token)
    }

    // set interval for polling every 5 seconds
    setInterval(() => 5000)
  }, [])
  
  return (
    <Container >
      <header className="App-header">
        {!token && (
          <LoginButton 
            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
              "%20"
            )}&response_type=token&show_dialog=true`}>
            Login to Spotify
          </LoginButton>
        )}
        {token && !no_data && (
          <div>
            <BigText>
              Spotify Info
            </BigText>
            <Text>
              Username: {username}
            </Text>
            <BigText>
              Top artist: 
            </BigText>
            <Row>
              {topArtists.map((artist) => <Text key={artist.id}>{artist.name}</Text>)}
            </Row>
            <BigText>
              Top Songs: 
            </BigText>
            <Row>
              {topSongs.map((song) => <Text key={song.id}>{song.name}</Text>)}
            </Row>
          </div>
        )}
        {no_data && (
          <Text>
            You need to be playing a song on Spotify, for something to appear here.
          </Text>
        )}
      </header>
    </Container>
  )
}

export default SpotifyInfo
