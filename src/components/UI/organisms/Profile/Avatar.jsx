import ButtonUpload from '../../atoms/btnUpload'

const Avatar = () => {
  return (
    <div
      style={{ width: '35%' }}
      className="float-left mr-6 rounded-lg overflow-hidden shadow-lg bg-white"
    >
      <div className="flex justify-center mt-8">
        <img
          alt="ava"
          src="https://i.imgur.com/8Km9tLL.jpg"
          className="rounded-full border-solid border-white border-2 -mt-3"
        />
      </div>

      <div className="text-center px-3 pb-6 pt-2">
        <h3 className="text-2xl text-purple bold font-roboto">Olivia Dunham</h3>
        <p className="mt-2 font-roboto font-light">
          Hello, i'm from another the other side!
        </p>
      </div>

      <div className="flex justify-center py-3 border-t">
        <div className="text-center">
          <ButtonUpload />
        </div>
      </div>
    </div>
  )
}

export default Avatar
