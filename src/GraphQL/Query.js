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

const GET_MAIN_DASHBOARD = gql`
  query MainDashboard {
    agents {
      id
      points
      claims: transactions_aggregate(where: { type: { _eq: Debit } }) {
        aggregate {
          count
        }
      }
      redeems: transactions_aggregate(where: { type: { _eq: Credit } }) {
        aggregate {
          count
        }
      }
    }
  }
`

const GET_RECENT_TRANSACTIONS = gql`
  query RecentTransactions {
    transactions(limit: 10, order_by: { created_at: desc }) {
      id
      title
      type
      points
      created_at
      status
    }
  }
`

const GET_100_TRANSACTIONS = gql`
  query OneHundredTransactions {
    transactions(limit: 100, order_by: { created_at: desc }) {
      id
      title
      type
      points
      created_at
      status
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

export {
  GET_AGENT,
  GET_MAIN_DASHBOARD,
  GET_RECENT_TRANSACTIONS,
  GET_100_TRANSACTIONS,
  GET_PRODUCT,
  GET_REWARD,
}
