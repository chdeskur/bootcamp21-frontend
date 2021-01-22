import gql from 'graphql-tag'

export const UPDATE_PROFILE = gql`
    mutation ($profile: profileInput!) {
        updateProfile(input: $profile) {
            user {
                id
            }
            token    
        }
    }
`
