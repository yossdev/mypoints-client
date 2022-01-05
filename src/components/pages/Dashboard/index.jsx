import UserMenu from '../../UI/organisms/UserMenu'
import Sidebar from '../../UI/organisms/Sidebar'

import { HomeIcon } from '@primer/octicons-react'

const Dashboard = () => {
  document.title = 'Dashboard'

  return (
    <div className="h-screen bg-grey">
      <Sidebar />
      <UserMenu />

      <div className="ml-80 pt-3 font-roboto">
        <HomeIcon size={16} fill="darkgrey" />
        <span className="text-sm ml-2 text-darkgrey">/ Dashboard</span> <br />
        <span className="text-md text-darkgrey font-bold">Dashboard</span>
      </div>
    </div>
  )
}

export default Dashboard
