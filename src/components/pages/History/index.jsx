import { HourglassIcon } from '@primer/octicons-react'
import Table from '../../UI/organisms/History/Table'
import MainLoading from '../../UI/atoms/Spinner/MainLoading'
import Error from '../../UI/organisms/Error'

import { useQuery } from '@apollo/client'
import { GET_100_TRANSACTIONS } from '../../../GraphQL/Query'

const History = () => {
  document.title = 'History'
  document.body.style = 'background: #EEEEEE;'

  const { data, loading, error } = useQuery(GET_100_TRANSACTIONS, {
    notifyOnNetworkStatusChange: true,
  })

  if (loading) return <MainLoading />
  if (error) return <Error />

  return (
    <>
      <div className="ml-80 pt-3 font-roboto">
        <HourglassIcon size={16} fill="darkgrey" />
        <span className="text-sm ml-2 text-darkgrey">
          / History Transaction
        </span>
        <br />
        <span className="text-md text-darkgrey font-bold">History</span>
      </div>

      <div
        style={{
          marginTop: '17px',
          width: '80%',
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
