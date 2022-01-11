import { useState } from 'react'

import ButtonUpload from '../../atoms/btnUpload'
import EditProfile from './EditProfile'

const Avatar = () => {
  const [profile, setProfile] = useState(false)
  const [foto, setFoto] = useState(false)

  return (
    <>
      <div
        style={{ width: '35%', margin: 'auto' }}
        className="rounded-lg overflow-hidden shadow-lg bg-white"
      >
        <div className="flex justify-center mt-8">
          <img
            alt="ava"
            src="https://i.imgur.com/8Km9tLL.jpg"
            className="rounded-full border-solid border-white border-2 -mt-3"
          />
        </div>

        <div className="text-center px-3 pb-6 pt-2">
          <h3 className="text-2xl text-purple bold font-roboto">Nama</h3>
        </div>

        <div>
          <p
            onClick={() => setFoto(!foto)}
            className="text-center mb-4 text-sm text-blue-500 cursor-pointer hover:underline hover:text-blue-800"
          >
            Edit Foto?
          </p>

          <p
            onClick={() => setProfile(!profile)}
            className="text-center mb-4 text-sm text-blue-500 cursor-pointer hover:underline hover:text-blue-800"
          >
            Edit Profile?
          </p>
        </div>

        {foto ? (
          <div className="flex justify-center py-3 border-t">
            <div className="text-center inline-block">
              <input type="file" />
            </div>
            <ButtonUpload />
          </div>
        ) : null}
      </div>

      {profile ? <EditProfile /> : null}
    </>
  )
}

export default Avatar
