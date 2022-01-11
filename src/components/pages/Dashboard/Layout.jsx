import { Outlet } from 'react-router-dom'

import UserMenu from '../../UI/organisms/UserMenu'
import Sidebar from '../../UI/organisms/Sidebar'

import { useQuery } from '@apollo/client'
import { GET_AGENT } from '../../../GraphQL/Query'

import Loading from '../../UI/atoms/Loading'
import Error from '../../UI/organisms/Error'

const Layout = () => {
  const { data, loading, error } = useQuery(GET_AGENT, {
    notifyOnNetworkStatusChange: true,
  })

  if (loading) return <Loading />
  if (error) return <Error />

  const agent = data.agents[0]
  return (
    <>
      <Sidebar />
      <UserMenu img={agent.img} />

      <Outlet />
    </>
  )
}

export default Layout
