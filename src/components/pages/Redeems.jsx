import UserMenu from '../UI/organisms/UserMenu'
import Sidebar from '../UI/organisms/Sidebar'

import { GiftIcon } from '@primer/octicons-react'

const Redeems = () => {
  document.title = 'Redeems'

  return (
    <div className="h-screen bg-grey">
      <Sidebar />
      <UserMenu />

      <div className="ml-80 pt-3 font-roboto">
        <GiftIcon size={16} fill="darkgrey" />
        <span className="text-sm ml-2 text-darkgrey">/ Redeems</span>
        <br />
        <span className="text-md text-darkgrey font-bold">Redeems</span>
      </div>
    </div>
  )
}

export default Redeems
