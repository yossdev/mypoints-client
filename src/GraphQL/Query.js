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

const GET_PRODUCT = gql`
  query MyQuery {
    products {
      id
      title
      points
    }
  }
`

const GET_REWARD = gql`
  query MyQuery {
    rewards {
      id
      img
      title
      points
    }
  }
`

const GET_TRANSACTION = gql`
  query MyQuery {
    transactions {
      title
      points
      type
      updated_at
      status
    }
  }
`

const GET_TRANSACTION_LIMIT = gql`
  query MyQuery {
    transactions(limit: 5) {
      title
      points
      type
      updated_at
      status
    }
  }
`

export {
  GET_AGENT,
  GET_PRODUCT,
  GET_REWARD,
  GET_TRANSACTION,
  GET_TRANSACTION_LIMIT,
}
