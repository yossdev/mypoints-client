import { useState, useRef, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useApolloClient } from '@apollo/client'
import { useDispatch } from 'react-redux'
import { signOut } from '../../../../store/slice'

import {
  ChevronDownIcon,
  PersonIcon,
  SignOutIcon,
} from '@primer/octicons-react'

const UserMenu = (props) => {
  const [menu, setMenu] = useState(false)

  const drop = useRef(null)

  const handleClick = (e) => {
    if (!e.target.closest(`.${drop.current?.className}`) && menu) {
      setMenu(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  })

  const handleDropdown = () => {
    setMenu(!menu)
  }

  const client = useApolloClient()
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const handleSignOut = () => {
    client.resetStore()
    dispatch(signOut())

    navigate('/')
  }

  return (
    <div className="dropdown" ref={drop}>
      <div className="float-right mr-7 mt-7 font-roboto-300">
        <div
          onClick={handleDropdown}
          className="flex ml-10 cursor-pointer items-center"
        >
          {props.img !== '' ? (
            <div className="mr-3">
              <img
                alt="avatar"
                className="rounded-full h-8 w-8"
                src={props.img}
              />
            </div>
          ) : (
            <div className="mr-3">
              <img
                alt="avatar"
                className="rounded-full h-8 w-8"
                src={
                  'https://kredithptangcity.com/wp-content/uploads/2020/11/user.png'
                }
              />
            </div>
          )}

          <ChevronDownIcon size={20} fill="#5C5C5C" />
        </div>

        {menu ? (
          <div className="w-100 absolute bg-white p-2 border border-purple rounded-md mt-2 drop-shadow-lg">
            <ul>
              <li className="flex hover:bg-lightpurple cursor-pointer p-2">
                <NavLink to="/profile">
                  <div className="flex items-center">
                    <PersonIcon size={16} fill="#5C5C5C" />

                    <span className="text-sm ml-2">Profile</span>
                  </div>
                </NavLink>
              </li>

              <li className="flex hover:bg-lightpurple cursor-pointer p-2">
                <button onClick={handleSignOut}>
                  <div className="flex items-center">
                    <SignOutIcon size={16} fill="#5C5C5C" />
                    <span className="text-sm ml-2">Log out</span>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default UserMenu
