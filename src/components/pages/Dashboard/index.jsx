import { HomeIcon } from '@primer/octicons-react'
import Greeting from '../../UI/organisms/Dashboard/Greeting'
import Main from '../../UI/organisms/Dashboard/Main'
import LatestHistory from '../../UI/organisms/Dashboard/LatestHistory'
import MainLoading from '../../UI/atoms/Spinner/MainLoading'
import Error from '../../UI/organisms/Error'

import { useQuery } from '@apollo/client'
import { GET_MAIN_DASHBOARD, GET_TRANSACTIONS } from '../../../GraphQL/Query'

const Dashboard = () => {
  document.title = 'Dashboard'
  document.body.style = 'background: #EEEEEE;'

  const { data, loading, error } = useQuery(GET_MAIN_DASHBOARD, {
    notifyOnNetworkStatusChange: true,
  })

  const {
    data: recentTransaction,
    loading: loadingTransaction,
    error: errorTransaction,
  } = useQuery(GET_TRANSACTIONS, {
    variables: { limit: 5 },
    notifyOnNetworkStatusChange: true,
  })

  if (loading || loadingTransaction) return <MainLoading />
  if (error || errorTransaction) return <Error />

  const agent = data.agents[0]

  return (
    <>
      <div className="ml-80 pt-10 font-roboto">
        <HomeIcon size={20} fill="#5C5C5C" />
        <span className="text-lg text-darkgrey font-bold"> Dashboard</span>
      </div>

      <div
        style={{
          marginTop: '20px',
          marginRight: '15px',
          width: '85%',
          float: 'right',
          padding: '20px',
        }}
      >
        <Greeting />
        <Main data={agent} />
        <LatestHistory data={recentTransaction} />
      </div>
    </>
  )
}

export default Dashboard
