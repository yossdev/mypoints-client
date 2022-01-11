import { gql } from '@apollo/client'

const GET_AGENT = gql`
  query MyQuery {
    agents {
      id
      name
      email
      img
      points
    }
  }
`

export { GET_AGENT }
