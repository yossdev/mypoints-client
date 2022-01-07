import UserMenu from '../../UI/organisms/UserMenu'
import Sidebar from '../../UI/organisms/Sidebar'
import Loading from '../../UI/atoms/Loading'

import { useQuery } from '@apollo/client'
import { GET_AGENT } from '../../../GraphQL/Query'
import { PersonIcon } from '@primer/octicons-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { store } from '../../../store/store'

const Profile = () => {
  document.title = 'Profile'

  const { data, loading, error } = useQuery(GET_AGENT, {
    notifyOnNetworkStatusChange: true,
  })

  const s = store.getState()
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && !s.store.authorized) {
      navigate('/login', { replace: true })
    }
  })

  if (loading) return <Loading />
  if (error) return <h1>Error...</h1>

  const agent = data.agents[0]

  return (
    <div className="h-screen bg-grey">
      <Sidebar />
      <UserMenu />

      <div className="ml-80 pt-3 font-roboto">
        <PersonIcon size={16} fill="darkgrey" />
        <span className="text-sm ml-2 text-darkgrey">/ Agent Profile</span>
        <br />
        <span className="text-md text-darkgrey font-bold">Profile</span>
        <p>{agent.name}</p>
      </div>
    </div>
  )
}

export default Profile
