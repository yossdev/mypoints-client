import { HourglassIcon } from '@primer/octicons-react'
import Table from '../../UI/organisms/History/Table'
import MainLoading from '../../UI/atoms/Spinner/MainLoading'
import Error from '../../UI/organisms/Error'

import { useQuery } from '@apollo/client'
import { GET_TRANSACTIONS } from '../../../GraphQL/Query'

const History = () => {
  document.title = 'History'
  document.body.style = 'background: #EEEEEE;'

  const { data, loading, error } = useQuery(GET_TRANSACTIONS, {
    variables: { limit: 100 },
    notifyOnNetworkStatusChange: true,
  })

  if (loading) return <MainLoading />
  if (error) return <Error />

  return (
    <>
      <div className="ml-80 pt-10 font-roboto">
        <HourglassIcon size={20} fill="#5C5C5C" />
        <span className="text-lg text-darkgrey font-bold">
          History Transaction
        </span>
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
        <Table data={data} />
      </div>
    </>
  )
}

export default History
