import Greeting from '../../UI/organisms/Dashboard/Greeting'
import Main from '../../UI/organisms/Dashboard/Main'
import LatestHistory from '../../UI/organisms/Dashboard/LatestHistory'

import { HomeIcon } from '@primer/octicons-react'

const Dashboard = () => {
  document.title = 'Dashboard'
  document.body.style = 'background: #EEEEEE;'

  return (
    <>
      <div className="ml-80 pt-3 font-roboto">
        <HomeIcon size={16} fill="darkgrey" />
        <span className="text-sm ml-2 text-darkgrey">/ Dashboard</span> <br />
        <span className="text-md text-darkgrey font-bold">Dashboard</span>
      </div>

      <div
        style={{
          marginTop: '17px',
          width: '80%',
          float: 'right',
          padding: '20px',
        }}
      >
        <Greeting />
        <Main />
        <LatestHistory />
      </div>
    </>
  )
}

export default Dashboard
