import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import {
  ChevronDownIcon,
  PersonIcon,
  SignOutIcon,
} from '@primer/octicons-react'

const UserMenu = () => {
  const [menu, setMenu] = useState(false)

  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/', { replace: true })
  }

  return (
    <>
      <div className="float-right mr-10 mt-4 font-roboto-300">
        <div
          onClick={() => setMenu(!menu)}
          className="flex ml-10 cursor-pointer items-center"
        >
          <img
            alt="avatar"
            className="mr-2"
            src={
              'https://kredithptangcity.com/wp-content/uploads/2020/11/user.png'
            }
            width={35}
          />

          <ChevronDownIcon size={20} fill="darkgrey" />
        </div>

        {menu ? (
          <div className="w-100 absolute bg-white p-2 border border-purple rounded-md mt-2 drop-shadow-lg">
            <ul>
              <li className="flex hover:bg-lightpurple cursor-pointer p-2">
                <Link to="/profile">
                  <div className="flex items-center">
                    <PersonIcon size={16} fill="darkgrey" />

                    <span className="text-sm ml-2">Profile</span>
                  </div>
                </Link>
              </li>

              <li className="flex hover:bg-lightpurple cursor-pointer p-2">
                <div onClick={handleLogout} className="flex items-center">
                  <SignOutIcon size={16} fill="darkgrey" />

                  <span className="text-sm ml-2">Logout</span>
                </div>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  )
}

export default UserMenu
