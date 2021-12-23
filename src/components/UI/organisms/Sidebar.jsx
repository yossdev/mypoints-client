import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import {
  UnverifiedIcon,
  HourglassIcon,
  TagIcon,
  GiftIcon,
  HomeIcon,
  ChevronDownIcon,
} from '@primer/octicons-react'

import logo from '../atoms/logo-white.svg'

const Sidebar = () => {
  const [redeem, setRedeem] = useState(false)

  return (
    <>
      <div className="absolute h-full bg-purple shadow flex-col justify-between sm:flex font-roboto">
        <div className="pl-5 pr-5">
          <div className="h-16 w-full pl-2 flex items-center">
            <img alt="logo white" src={logo} width={175} />
          </div>

          <ul className="mt-5">
            <NavLink to="/dashboard">
              <li className="flex w-full justify-between text-white hover:bg-darkpurple rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
                <div className="flex items-center">
                  <HomeIcon size={20} />

                  <span className="text-md ml-2">Dashboard</span>
                </div>
              </li>
            </NavLink>

            <NavLink to="/claims">
              <li className="flex w-full justify-between text-white hover:bg-darkpurple rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
                <div className="flex items-center">
                  <TagIcon size={20} />

                  <span className="text-md  ml-2">Claims</span>
                </div>
              </li>
            </NavLink>

            <li
              onClick={() => setRedeem(!redeem)}
              className="flex w-full justify-between text-white hover:bg-darkpurple rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2"
            >
              <div className="flex items-center">
                <GiftIcon size={20} />

                <span className="text-md ml-2 mr-14">Redeems</span>

                <ChevronDownIcon size={20} />
              </div>
            </li>

            {redeem ? (
              <div>
                {' '}
                <ul>
                  <NavLink to="/redeems">
                    <li className="flex w-full justify-between text-white hover:bg-darkpurple rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
                      <div className="flex items-center">
                        <span className="text-md  ml-7">Bank Transfer</span>
                      </div>
                    </li>
                  </NavLink>

                  <NavLink to="/redeems">
                    <li className="flex w-full justify-between text-white hover:bg-darkpurple rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
                      <div className="flex items-center">
                        <span className="text-md  ml-7">E - Wallet</span>
                      </div>
                    </li>
                  </NavLink>

                  <NavLink to="/redeems">
                    <li className="flex w-full justify-between text-white hover:bg-darkpurple rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
                      <div className="flex items-center">
                        <span className="text-md ml-7">Pulsa / Paket Data</span>
                      </div>
                    </li>
                  </NavLink>
                </ul>{' '}
              </div>
            ) : null}

            <NavLink to="/history">
              <li className="flex w-full justify-between text-white hover:bg-darkpurple rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
                <div className="flex items-center">
                  <HourglassIcon size={20} />

                  <span className="text-md ml-2">History</span>
                </div>
              </li>
            </NavLink>

            <NavLink to="/faq">
              <li className="flex w-full justify-between text-white hover:bg-darkpurple rounded-md cursor-pointer pl-4 pr-10 pt-2 pb-2 mb-2">
                <div className="flex items-center">
                  <UnverifiedIcon size={20} />

                  <span className="text-md ml-2">FAQ</span>
                </div>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar
