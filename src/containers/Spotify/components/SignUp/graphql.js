import gql from 'graphql-tag'

export default gql`
    mutation ($registerInput: registerInput!) {
        register(input: $registerInput) {
            user {
                id
            }
            token    
        }
    }
`
