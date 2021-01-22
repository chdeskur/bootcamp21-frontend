import gql from 'graphql-tag'

export default gql`
mutation registerWithData($input: AddUserWithDataInput!) {
    registerWithData(input: $input) {
          token
    }
  }
`
