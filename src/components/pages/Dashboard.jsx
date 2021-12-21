import UserMenu from '../UI/organisms/UserMenu'
import Sidebar from '../UI/organisms/Sidebar'

const Dashboard = () => {
  document.title = 'Dashboard'

  return (
    <>
      <Sidebar />
      <UserMenu />
    </>
  )
}

export default Dashboard
