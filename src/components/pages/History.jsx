import UserMenu from '../UI/organisms/UserMenu'
import Sidebar from '../UI/organisms/Sidebar'

import { HourglassIcon } from '@primer/octicons-react'

const History = () => {
  document.title = 'History'

  return (
    <div className="h-screen bg-grey">
      <Sidebar />
      <UserMenu />

      <div className="ml-80 pt-3 font-roboto">
        <HourglassIcon size={16} fill="darkgrey" />
        <span className="text-sm ml-2 text-darkgrey">
          / History Transaction
        </span>
        <br />
        <span className="text-md text-darkgrey font-bold">History</span>
      </div>
    </div>
  )
}

export default History
