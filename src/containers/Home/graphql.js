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
  query userLikedSongNames($id: ID!) {
    userLikedSongNames(id: $id) {
      title
    }
  }
`

export const USER_ARTISTS = gql`
  query useFavArtistNames($id: ID!) {
    useFavArtistNames(id: $id) {
      name
    }
  }
`