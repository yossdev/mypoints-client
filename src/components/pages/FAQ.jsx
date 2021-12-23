import UserMenu from '../UI/organisms/UserMenu'
import Sidebar from '../UI/organisms/Sidebar'

import { UnverifiedIcon } from '@primer/octicons-react'

const FAQ = () => {
  document.title = 'FAQ'

  return (
    <div className="h-screen bg-grey">
      <Sidebar />
      <UserMenu />

      <div className="ml-80 pt-3 font-roboto">
        <UnverifiedIcon size={16} fill="darkgrey" />
        <span className="text-sm ml-2 text-darkgrey">
          / Frequently Asked Question
        </span>{' '}
        <br />
        <span className="text-md text-darkgrey font-bold">F A Q</span>
      </div>
    </div>
  )
}

export default FAQ
