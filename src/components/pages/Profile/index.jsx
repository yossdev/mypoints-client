import { PersonIcon } from '@primer/octicons-react'
import Agent from '../../UI/organisms/Profile'
import MainLoading from '../../UI/atoms/Spinner/MainLoading'
import Error from '../../UI/organisms/Error'

import { useQuery } from '@apollo/client'
import { GET_AGENT } from '../../../GraphQL/Query'

const Profile = () => {
  document.title = 'Profile'
  document.body.style = 'background: #EEEEEE;'

  const { data, loading, error } = useQuery(GET_AGENT, {
    notifyOnNetworkStatusChange: true,
  })

  if (loading) return <MainLoading />
  if (error) return <Error />

  const agent = data.agents[0]

  return (
    <>
      <div className="ml-80 pt-3 font-roboto">
        <PersonIcon size={16} fill="darkgrey" />
        <span className="text-sm ml-2 text-darkgrey">/ Agent Profile</span>
        <br />
        <span className="text-md text-darkgrey font-bold">Profile</span>
      </div>

      <div
        className="mx-auto"
        style={{
          marginTop: '17px',
          width: '80%',
          float: 'right',
          padding: '20px',
          display: 'inline',
        }}
      >
        <div className="mx-auto">
          <Agent agent={agent} />
        </div>
      </div>
    </>
  )
}

export default Profile
