import UserMenu from '../UI/organisms/UserMenu'
import Sidebar from '../UI/organisms/Sidebar'

import { PersonIcon } from '@primer/octicons-react'

const Profile = () => {
  document.title = 'Profile'

  return (
    <div className="h-screen bg-grey">
      <Sidebar />
      <UserMenu />

      <div className="ml-80 pt-3 font-roboto">
        <PersonIcon size={16} fill="darkgrey" />
        <span className="text-sm ml-2 text-darkgrey">/ Agent Profile</span>
        <br />
        <span className="text-md text-darkgrey font-bold">Profile</span>
      </div>
    </div>
  )
}

export default Profile
