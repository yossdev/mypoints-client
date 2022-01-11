import ButtonUpload from '../../atoms/btnUpload'

import Loading from '../../atoms/Loading'
import Error from '../../../pages/Error'

import { useQuery } from '@apollo/client'
import { GET_AGENT } from '../../../../GraphQL/Query'

const Avatar = () => {
  const { data, loading, error } = useQuery(GET_AGENT, {
    notifyOnNetworkStatusChange: true,
  })

  if (loading) return <Loading />
  if (error) return <Error />

  const agent = data.agents[0]

  return (
    <div
      style={{ width: '35%' }}
      className="float-left mr-6 rounded-lg overflow-hidden shadow-lg bg-white"
    >
      <div className="flex justify-center mt-8">
        <img
          alt="ava"
          src="https://i.imgur.com/8Km9tLL.jpg"
          className="rounded-full border-solid border-white border-2 -mt-3"
        />
      </div>

      <div className="text-center px-3 pb-6 pt-2">
        <h3 className="text-2xl text-purple bold font-roboto">{agent.name}</h3>
      </div>

      <div className="flex justify-center py-3 border-t">
        <div className="text-center">
          <ButtonUpload />
        </div>
      </div>
    </div>
  )
}

export default Avatar
