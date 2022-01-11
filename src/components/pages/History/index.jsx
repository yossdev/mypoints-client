import UserMenu from '../../UI/organisms/UserMenu'
import Sidebar from '../../UI/organisms/Sidebar'
import Table from '../../UI/organisms/History/Table'

import { HourglassIcon } from '@primer/octicons-react'

const History = () => {
  document.title = 'History'
  document.body.style = 'background: #EEEEEE;'

  return (
    <>
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

      <div
        style={{
          marginTop: '17px',
          width: '80%',
          float: 'right',
          padding: '20px',
        }}
      >
        <Table />
      </div>
    </>
  )
}

export default History
