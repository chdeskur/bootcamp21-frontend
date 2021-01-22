import gql from 'graphql-tag'

export const ALL_USERS = gql`
  query allUsers {
    allUsers {
      firstName,
      lastName,
      username,
      age,
      bio,
      imageurl,
      phoneNumber
      id, 
    }
  }
`

export const USER_SONGS = gql`
  query userSongsById($id: id) {
    userSongsById(id: $id) {
      userId, 
      songId
    }
  }
`

export const SONG_BY_ID = gql`
  query songById($id: id) {
    songById(id: $id) {
      title
    }
  }
`

export const USER_ARTISTS = gql`
  query userArtistsById($id: id) {
    userArtistsById(id: $id) {
      artists {
        name
      }
    }
  }
`