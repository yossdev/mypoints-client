import MainLoading from '../../atoms/Spinner/MainLoading'
import Error from '../Error'

import { useQuery } from '@apollo/client'
import { GET_AGENT } from '../../../../GraphQL/Query'

const Greeting = () => {
  const { data, loading, error } = useQuery(GET_AGENT, {
    notifyOnNetworkStatusChange: true,
  })

  if (loading) return <MainLoading />
  if (error) return <Error />

  const agent = data.agents[0]
  const name = agent.name.charAt(0).toUpperCase() + agent.name.slice(1)

  return (
    <div
      style={{ width: '100%' }}
      className="inline-block mb-8 rounded-lg overflow-hidden shadow-lg bg-white"
    >
      <div className="mt-5 ml-5 px-3 pb-6 pt-2">
        <h3 className="text-2xl text-purple bold font-roboto">
          Selamat Datang, {name}
        </h3>
        <p className="mt-2 font-roboto font-light">
          Hallo, semoga harimu menyenangkan ya. Semangat mengumpulkan Point!!
        </p>
      </div>
    </div>
  )
}

export default Greeting
