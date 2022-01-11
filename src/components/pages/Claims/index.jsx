import UserMenu from '../../UI/organisms/UserMenu'
import Sidebar from '../../UI/organisms/Sidebar'
import Klaim from '../../UI/organisms/Claims/Klaim'

import { Products } from '../../UI/organisms/Claims/MockProduct'

import { TagIcon } from '@primer/octicons-react'

const Claims = () => {
  document.title = 'Claims'
  document.body.style = 'background: #EEEEEE;'

  return (
    <>
      <Sidebar />
      <UserMenu />

      <div className="ml-80 pt-3 font-roboto">
        <TagIcon size={16} fill="darkgrey" />
        <span className="text-sm ml-2 text-darkgrey">/ Claims</span> <br />
        <span className="text-md text-darkgrey font-bold">Claims</span>
      </div>

      <div
        style={{
          marginTop: '17px',
          width: '80%',
          float: 'right',
          padding: '20px',
        }}
      >
        <Klaim product={Products} />
      </div>
    </>
  )
}

export default Claims
