import gql from 'graphql-tag'

export const REGISTER = gql`
    mutation ($registerInput: registerInput!) {
        register(input: $registerInput) {
            user {
                id
            }
            token    
        }
    }
`
