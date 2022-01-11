import Claim from '../../UI/organisms/Claim'

import { Products } from '../../UI/organisms/Claim/MockProduct'

import { TagIcon } from '@primer/octicons-react'

const Claims = () => {
  document.title = 'Claims'
  document.body.style = 'background: #EEEEEE;'

  return (
    <>
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
        <Claim product={Products} />
      </div>
    </>
  )
}

export default Claims
