import UserMenu from '../../UI/organisms/UserMenu'
import Sidebar from '../../UI/organisms/Sidebar'
import Transfer from '../../UI/organisms/Redeems/Transfer'
import Ewallet from '../../UI/organisms/Redeems/Ewallet'
import PulsaData from '../../UI/organisms/Redeems/PulsaData'

import { GiftIcon } from '@primer/octicons-react'

const Redeems = () => {
  document.title = 'Redeems'
  document.body.style = 'background: #EEEEEE;'

  return (
    <>
      <Sidebar />
      <UserMenu />

      <div className="ml-80 pt-3 font-roboto">
        <GiftIcon size={16} fill="darkgrey" />
        <span className="text-sm ml-2 text-darkgrey">/ Redeems</span>
        <br />
        <span className="text-md text-darkgrey font-bold">Redeems</span>
      </div>

      <div
        style={{
          marginTop: '17px',
          width: '80%',
          float: 'right',
          padding: '20px',
        }}
      >
        <Transfer />
        <Ewallet />
        <PulsaData />
      </div>
    </>
  )
}

export default Redeems
