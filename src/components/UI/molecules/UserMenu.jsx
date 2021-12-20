import { useState } from "react"
import { ChevronDownIcon, PersonIcon, SignOutIcon } from '@primer/octicons-react'

function UserMenu() {

    const [menu, setMenu] = useState(false)

    return (
        <>
            <div className="float-right mr-10 mt-4">
                <div onClick={() => setMenu(!menu)} className="flex ml-10 cursor-pointer items-center">
                    <img alt="avatar" className="mr-2" src={"https://kredithptangcity.com/wp-content/uploads/2020/11/user.png"} width={35} />

                    <ChevronDownIcon size={20} fill="#A0A0A0" />
                </div>
                
                {menu?
                <div className="w-100 absolute bg-white p-2 border border-[#5F2788] rounded-md mt-2 drop-shadow-lg">
                    <ul>
                        <li className="flex hover:bg-[#F7F4F9] cursor-pointer p-2">
                            <div className="flex items-center">
                                <PersonIcon size={16} fill="#A0A0A0" />

                                <span className="text-sm ml-2">Profile</span>
                            </div>
                        </li>

                        <li className="flex hover:bg-[#F7F4F9] cursor-pointer p-2">
                            <div className="flex items-center">
                                <SignOutIcon size={16} fill="#A0A0A0" />

                                <span className="text-sm ml-2">Logout</span>
                            </div>
                        </li>
                    </ul>
                </div>:null}

            </div>
        </>
    )
}


export default UserMenu