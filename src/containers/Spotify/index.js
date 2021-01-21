import React, { useEffect, useState } from "react"
import hash from "./hash"
import { authEndpoint, clientId, redirectUri, scopes } from "../../config";
import $ from 'jquery'
import Player from "./Player"
import './index.css'

const Home = () => {
  const [token, setToken] = useState(null)
  const [item, setItem] = useState({
    album: {images: [{ url: '' }]}, 
    name: "", 
    artists: [{ name: "" }],
    duration_ms: 0
  })
  const [is_playing, setPlaying] = useState("Paused")
  const [progress_ms, setProgress] = useState(0)
  const [no_data, noData] = useState(false)
  const [topArtists, setArtists] = useState([])
 
  useEffect(() => {
    // Set token
    let _token = hash.access_token;
    //let _token = 'BQDQJQxhOmI8dwp0KOK7WW6XRPkI_H5AkKjdq7GoMcjbkHJZNRCKLkxQfqIM3njyy5ZfpcC8-1qhRq1_fPLxoBHTkeed4nzG2pwvyuniBpXnJiaz8wEOrgm7nUntBA-FW1phrjwUeFiUXq5h2tK7r63WUwI4um2WR6srQCw'
    if (_token) {
      // Set token
      setToken(_token);
      getUser(_token);
      getCurrentlyPlaying(_token);
    }

    // set interval for polling every 5 seconds
    setInterval(() => 5000);
  }, [])

  const trying = async(token) => {
    const response = await fetch('https://api.spotify.com/v1/me/player/', {
      type: 'GET',
      headers: {
        'Authorization': 'Bearer + ' + token
      }
    })
    const json = await response.json()
    alert(JSON.stringify(json))
  }

  const getCurrentlyPlaying = (token) => {
    // Make a call using the token
    trying(token)
    $.ajax({
      url: "https://api.spotify.com/v1/me/player",
      type: "GET",
      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: data => {
        // Checks if the data is not empty
        if(!data) {
          noData(true);
          return;
        }

        setItem(data.item)
        setPlaying(data.is_playing)
        setProgress(data.progress_ms)
        noData(false)
      }
    });
  }

  const getUser = (token) => {
    console.log(token)
    return $.ajax({
      url: 'https://api.spotify.com/v1/me/top/',
      type: "GET", 

      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: data => {
        // Checks if the data is not empty
        alert('hi')
        alert(JSON.stringify(data))
        if(!data) {
          noData(true);
          return;
        }


        //setArtists(data.items[0])
      }
    })    
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src='https://i.pinimg.com/originals/1d/f4/6e/1df46e5b59ceaf54b63302e95644fd80.png' className="App-logo" alt="logo" />
        {!token && (
          <a
            className="btn btn--loginApp-link"
            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
              "%20"
            )}&response_type=token&show_dialog=true`}
          >
            Login to Spotify
          </a>
        )}
        {token && !no_data && (
          <div>
            <Player
              item={item}
              is_playing={is_playing}
              progress_ms={progress_ms}
            />
            <p>
              {topArtists}
            </p>
          </div>
        )}
        {no_data && (
          <p>
            You need to be playing a song on Spotify, for something to appear here.
          </p>
        )}
      </header>
    </div>
  );
}

export default Home;

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