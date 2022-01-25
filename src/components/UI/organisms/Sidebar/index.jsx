import { Link, NavLink, useLocation } from 'react-router-dom'

import {
  UnverifiedIcon,
  HourglassIcon,
  TagIcon,
  GiftIcon,
  HomeIcon,
} from '@primer/octicons-react'

import logoWhite from '../../../../assets/logo-white.svg'
import { useEffect, useState } from 'react'

const nav = {
  dashboard: false,
  claim: false,
  redeem: false,
  history: false,
  faq: false,
}

const Sidebar = () => {
  const [activeNav, setActiveNav] = useState(nav)

  let location = useLocation()

  useEffect(() => {
    const pathname = location.pathname
    const name = pathname.slice(1)
    setActiveNav({ ...nav, [name]: true })
  }, [location])

  return (
    <>
      <div className="fixed top-0 left-0 bottom-0 h-full bg-purple shadow flex-col justify-between sm:flex font-roboto">
        <div className="pl-5 pr-5">
          <Link to="/">
            <div className="h-16 w-full mt-3 pl-2 flex items-center">
              <img alt="logo white" src={logoWhite} width={175} />
            </div>
          </Link>

          <nav>
            <ul className="mt-5">
              <li
                className={
                  activeNav.dashboard ? 'rounded-md bg-darkpurple' : null
                }
              >
                <NavLink to="/dashboard">
                  <div className="flex w-full justify-between text-white hover:bg-darkpurple rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
                    <div className="flex items-center">
                      <HomeIcon size={20} />
                      <span className="text-md ml-2">Dashboard</span>
                    </div>
                  </div>
                </NavLink>
              </li>

              <li
                className={activeNav.claims ? 'rounded-md bg-darkpurple' : null}
              >
                <NavLink to="/claims">
                  <div className="flex w-full justify-between text-white hover:bg-darkpurple rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
                    <div className="flex items-center">
                      <TagIcon size={20} />
                      <span className="text-md  ml-2">Claims</span>
                    </div>
                  </div>
                </NavLink>
              </li>

              <li
                className={
                  activeNav.redeems ? 'rounded-md bg-darkpurple' : null
                }
              >
                <NavLink to="/redeems">
                  <div className="flex w-full justify-between text-white hover:bg-darkpurple rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
                    <div className="flex items-center">
                      <GiftIcon size={20} />
                      <span className="text-md ml-2 mr-14">Redeems</span>
                    </div>
                  </div>
                </NavLink>
              </li>

              <li
                className={
                  activeNav.history ? 'rounded-md bg-darkpurple' : null
                }
              >
                <NavLink to="/history">
                  <div className="flex w-full justify-between text-white hover:bg-darkpurple rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
                    <div className="flex items-center">
                      <HourglassIcon size={20} />
                      <span className="text-md ml-2">History</span>
                    </div>
                  </div>
                </NavLink>
              </li>

              <li className={activeNav.faq ? 'rounded-md bg-darkpurple' : null}>
                <NavLink to="/faq">
                  <div className="flex w-full justify-between text-white hover:bg-darkpurple rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
                    <div className="flex items-center">
                      <UnverifiedIcon size={20} />
                      <span className="text-md ml-2">FAQ</span>
                    </div>
                  </div>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Sidebar
