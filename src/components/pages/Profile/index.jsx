import { PersonIcon } from '@primer/octicons-react'
import Agent from '../../UI/organisms/Profile'
import MainLoading from '../../UI/atoms/Spinner/MainLoading'
import Error from '../../UI/organisms/Error'

import { useQuery } from '@apollo/client'
import { GET_AGENT } from '../../../GraphQL/Query'

const Profile = () => {
  document.title = 'Profile'
  document.body.style = 'background: #EEEEEE;'

  const { data, loading, error, refetch } = useQuery(GET_AGENT, {
    notifyOnNetworkStatusChange: true,
  })

  if (loading) return <MainLoading />
  if (error) return <Error />

  const agent = data.admins[0].agents[0]
  const admin = data.admins[0]

  return (
    <>
      <div className="ml-80 pt-10 font-roboto">
        <PersonIcon size={20} fill="#5C5C5C" />
        <span className="text-lg text-darkgrey font-bold"> Profile</span>
      </div>

      <div
        className="mx-auto"
        style={{
          marginTop: '20px',
          width: '85%',
          float: 'right',
          padding: '20px',
          display: 'inline',
        }}
      >
        <div className="mx-auto">
          <Agent agent={agent} admin={admin} refetch={refetch} />
        </div>
      </div>
    </>
  )
}

export default Profile
