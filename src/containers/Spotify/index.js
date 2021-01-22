import React, { useEffect, useState, useReducer } from "react"
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import hash from "./hash"
import { LOG_IN } from './graphql'
import LogIn from './components/Login'
import { authEndpoint, clientId, redirectUri, scopes } from "../../config";
import $ from 'jquery'
import './index.css'
import { CentralContainer, Table, CButton, Title, ErrorLabel } from "../../components/styles";
import { FormReducer, FormGenerator } from "../../components/FormGenerator";

const SpotifyInfo = () => {
  const [token, setToken] = useState(null)
  const [no_data, noData] = useState(false)
  const [username, setName] = useState('')
  const [topSongs, setSongs] = useState([])
  const [topArtists, setArtists] = useState([])

  const getSpotify = (token, setter, url = '') => {
    return $.ajax({
      url: 'https://api.spotify.com/v1/me/' + url,
      type: "GET", 
      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token)
      },
      success: data => {
        if(!data) {
          noData(true)
          return
        }
        setter(data.display_name)
      }
    })
  }

  useEffect(() => {
    // Set token
    let _token = hash.access_token
    if (_token) {
      // Set token
      setToken(_token)
      getSpotify(_token, setName)
      getSpotify(_token, setSongs, 'top/tracks?limit=5')
      getSpotify(_token, setArtists, 'top/artists?limit=5')
    }
    // set interval for polling every 5 seconds
    setInterval(() => 5000)
  }, [])
  return (
    <>    
      <LogIn />
      <div className="AppInner">
      <header className="App-header">
        {!token && (
          <LoginButton style={{textDecoration: 'none'}}
            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
              "%20"
            )}&response_type=token&show_dialog=true`}>
            Register with Spotify
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
      </div>
    </>
  );
}

export default SpotifyInfo;
//<User>
// {(user, loading, error) =>
//   user ? (
//       <ul>
//           <li>Name - {user.display_name}</li>
//           <li>ID - {user.id}</li>
//       </ul>
//   ) : null
// }
// </User>