import { useState } from 'react'

import ButtonUpload from '../../atoms/Button/Upload'
import ShowUpload from '../../atoms/Button/ShowUpload'
import ShowEditProfile from '../../atoms/Button/ShowEditProfile'
import EditProfile from './EditProfile'

const Profile = (props) => {
  const [editProfile, setEditProfile] = useState(false)
  const [editPhoto, setEditPhoto] = useState(false)

  const name =
    props.agent.name.charAt(0).toUpperCase() + props.agent.name.slice(1)

  return (
    <>
      <div
        style={{ width: '35%', margin: 'auto' }}
        className="rounded-lg overflow-hidden shadow-lg bg-white"
      >
        <div className="flex justify-center mt-8">
          {props.img !== '' ? (
            <img
              alt="avatar"
              src={props.agent.img}
              className="rounded-full border-solid border-white border-2 -mt-3"
            />
          ) : (
            <img
              alt="avatar"
              src="https://kredithptangcity.com/wp-content/uploads/2020/11/user.png"
              className="rounded-full border-solid border-white border-2 mt-3 max-h-36"
            />
          )}
        </div>

        <div className="text-center px-3 pb-6 pt-2">
          <h3 className="text-2xl text-purple bold font-roboto">{name}</h3>
          <h3 className="text-2xl text-purple bold font-roboto">
            {props.agent.email}
          </h3>
        </div>

        <div>
          <ShowUpload onClick={() => setEditPhoto(!editPhoto)} />

          <ShowEditProfile onClick={() => setEditProfile(!editProfile)} />
        </div>

        {editPhoto ? (
          <div className="flex justify-center py-3 border-t">
            <div className="text-center inline-block">
              <input type="file" />
            </div>
            <ButtonUpload />
          </div>
        ) : null}
      </div>

      {editProfile ? <EditProfile /> : null}
    </>
  )
}

export default Profile
