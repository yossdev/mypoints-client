import Loading from '../../atoms/Loading'
import Error from '../../../pages/Error'

import { useQuery } from '@apollo/client'
import { GET_AGENT } from '../../../../GraphQL/Query'

const SelamatDatang = () => {
  const { data, loading, error } = useQuery(GET_AGENT, {
    notifyOnNetworkStatusChange: true,
  })

  if (loading) return <Loading />
  if (error) return <Error />

  const agent = data.agents[0]

  return (
    <div
      style={{ width: '100%' }}
      className="inline-block mb-8 rounded-lg overflow-hidden shadow-lg bg-white"
    >
      <div className="mt-5 ml-5 px-3 pb-6 pt-2">
        <h3 className="text-2xl text-purple bold font-roboto">
          Selamat Datang Agen, {agent.name}
        </h3>
        <p className="mt-2 font-roboto font-light">
          Hello, i'm from another the other side!
        </p>
      </div>
    </div>
  )
}

export default SelamatDatang
