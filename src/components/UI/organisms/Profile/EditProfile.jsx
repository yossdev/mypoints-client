import ButtonSimpan from '../../atoms/btnSimpan'

const EditProfile = () => {
  return (
    <div
      style={{ width: '62%', margin: 'auto', marginTop: '20px' }}
      className="rounded-lg overflow-hidden shadow-lg bg-white"
    >
      <div className="ml-6 pb-6 mt-6">
        <h3 className="text-2xl text-purple bold font-roboto">Edit Profile</h3>
        <p className="mt-2 font-roboto font-light">
          Silahkan jika ingin melakukan perubahan data Anda!
        </p>
      </div>

      <div className="border-b"></div>

      <form className="px-8 pt-6 pb-8 justify-center mb-4 bg-white rounded">
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-purple font-roboto text-gray-700"
            htmlFor="email"
          >
            Nama Agen
          </label>
          <input
            className="w-full h-10 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded"
            type="text"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-purple font-roboto text-gray-700">
            Email
          </label>
          <input
            className="w-full h-10 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded"
            type="email"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-purple font-roboto text-gray-700">
            Password
          </label>
          <input
            className="w-full h-10 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded"
            type="password"
          />
        </div>
      </form>

      <div className="flex justify-center py-3 border-t">
        <div className="text-center mr-6">
          <ButtonSimpan />
        </div>
      </div>
    </div>
  )
}

export default EditProfile
