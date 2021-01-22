import gql from 'graphql-tag'

export const UPDATE_PROFILE = gql`
mutation ($profile: ModifyUserInput!) {
    modifyUser(input: $profile) {
        username
    }
}
`

export const GET_USER = gql`
    query ($token: String!) {
        userByToken (token: $token) {
            username
            FirstName: firstName
            LastName: lastName
            PhoneNumber: phoneNumber
            Age: age
            Email: email
            Bio: bio
        }
    }
`