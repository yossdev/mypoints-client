import UserMenu from '../../UI/organisms/UserMenu'
import Sidebar from '../../UI/organisms/Sidebar'
import Avatar from '../../UI/organisms/Profile/Avatar'
import EditProfile from '../../UI/organisms/Profile/EditProfile'

import { PersonIcon } from '@primer/octicons-react'

const Profile = () => {
  document.title = 'Profile'
  document.body.style = 'background: #EEEEEE;'

  return (
    <>
      <Sidebar />
      <UserMenu />

      <div className="ml-80 pt-3 font-roboto">
        <PersonIcon size={16} fill="darkgrey" />
        <span className="text-sm ml-2 text-darkgrey">/ Agent Profile</span>
        <br />
        <span className="text-md text-darkgrey font-bold">Profile</span>
      </div>

      <div
        style={{
          marginTop: '17px',
          width: '80%',
          float: 'right',
          padding: '20px',
          display: 'inline',
        }}
      >
        <Avatar />
        <EditProfile />
      </div>
    </>
  )
}

export default Profile
