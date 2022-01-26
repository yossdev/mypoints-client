import { gql } from '@apollo/client'

const GET_AGENT = gql`
  query Agent {
    admins {
      name
      agents {
        id
        name
        email
        img
        points
        created_at
      }
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

const GET_TRANSACTIONS = gql`
  query Transactions($limit: Int!) {
    transactions(order_by: { created_at: desc }, limit: $limit) {
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
  query Products {
    products {
      id
      img
      title
      points
    }
  }
`
const GET_REWARD = gql`
  query Rewards {
    e_money: rewards(where: { category: { _eq: E_MONEY } }) {
      id
      img
      title
      points
      category
    }
    cash_out: rewards(where: { category: { _eq: CASH_OUT } }) {
      id
      img
      title
      points
      category
    }
    digital_product: rewards(where: { category: { _eq: DIGITAL_PRODUCT } }) {
      id
      img
      title
      points
      category
    }
  }
`

export {
  GET_AGENT,
  GET_MAIN_DASHBOARD,
  GET_TRANSACTIONS,
  GET_PRODUCT,
  GET_REWARD,
}
