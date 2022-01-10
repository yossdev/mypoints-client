import { gql } from '@apollo/client'

const GET_AGENT = gql`
  query MyQuery {
    agents {
      id
      name
    }
  }
`

export { GET_AGENT }
