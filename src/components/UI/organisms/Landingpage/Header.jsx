import logo from '../../../../assets/logo.svg'
import ButtonLogin from '../../atoms/Button/Login'
import ButtonDashboard from '../../atoms/Button/Dashboard'

import { store } from '../../../../store/store'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const s = store.getState()

  return (
    <div className="relative select-none bg-white sm:flex sm:items-center h-16 w-full p-3 shadow-md border-t-8 border-purple">
      <Link to="/">
        <img className="ml-28" alt="logo ungu" src={logo} width={175} />
      </Link>

      <div className="sm:flex sm:items-stretch sm:flex-no-shrink sm:flex-grow">
        <div className="sm:flex sm:items-stretch sm:justify-end ml-auto">
          {!s.store.isAuthenticated ? (
            <NavLink to="/login">
              <ButtonLogin />
            </NavLink>
          ) : (
            <NavLink to="/dashboard">
              <ButtonDashboard />
            </NavLink>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
