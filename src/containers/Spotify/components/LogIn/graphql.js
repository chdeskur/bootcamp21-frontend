import gql from 'graphql-tag'

export const LOG_IN = gql`
    mutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            user {
                email
                id
            }
            token
        }
    }
`
