import UserMenu from '../../UI/organisms/UserMenu'
import Sidebar from '../../UI/organisms/Sidebar'

import { TagIcon } from '@primer/octicons-react'

const Claims = () => {
  document.title = 'Claims'

  return (
    <div className="h-screen bg-grey">
      <Sidebar />
      <UserMenu />

      <div className="ml-80 pt-3 font-roboto">
        <TagIcon size={16} fill="darkgrey" />
        <span className="text-sm ml-2 text-darkgrey">/ Claims</span> <br />
        <span className="text-md text-darkgrey font-bold">Claims</span>
      </div>
    </div>
  )
}

export default Claims
