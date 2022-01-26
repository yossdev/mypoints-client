import { useState, useRef, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useApolloClient } from '@apollo/client'
import { useDispatch } from 'react-redux'
import { signOut } from '../../../../store/slice'

import flower from '../../../../assets/flower.svg'

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
    <div className="flex float-right mr-7 mt-7 font-roboto-300">
      <div className="flex items-center bg-white rounded-md px-2 py-1">
        <h3 className="text-2xl mr-2 text-purple font-bold font-poppins">
          {props.points}
        </h3>
        <img alt="uang" src={flower} className=" w-6 h-6" />
      </div>

      <div>
        <div
          onClick={handleDropdown}
          className="flex ml-6 cursor-pointer items-center"
        >
          {props.img !== '' ? (
            <div className="mr-1">
              <img
                alt="avatar"
                className="rounded-full h-10 w-10"
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

        {menu && (
          <div className="w-100 absolute bg-white p-2 border border-purple rounded-md mt-2 drop-shadow-lg">
            <ul>
              <li>
                <NavLink to="/profile">
                  <div className="hover:bg-lightpurple cursor-pointer rounded-md p-2">
                    <div className="flex items-center">
                      <PersonIcon size={16} fill="#5C5C5C" />
                      <span className="text-sm ml-2">Profile</span>
                    </div>
                  </div>
                </NavLink>
              </li>

              <hr className="my-2" />

              <li>
                <button onClick={handleSignOut}>
                  <div className="hover:bg-darkred bg-red cursor-pointer rounded-md">
                    <div className="flex items-center p-2">
                      <SignOutIcon size={16} fill="#FFFFFF" />
                      <span className="text-sm ml-2 text-white">Log out</span>
                    </div>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default UserMenu
