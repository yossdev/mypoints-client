import flower from '../../../../assets/flower.svg'
import { useState } from 'react'

const Claim = (props) => {
  const [points, setPoints] = useState(0)

  const [image, setImage] = useState('')
  const [url, setUrl] = useState('')

  // upload image to cloudinary
  const handleUpload = (e) => {
    e.preventDefault()

    const data = new FormData()
    data.append('file', image)
    data.append('upload_preset', 'mypoints_media')
    data.append('cloud_name', 'mypoints')

    fetch('https://api.cloudinary.com/v1_1/mypoints/image/upload', {
      method: 'post',
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url)
      })
      .catch((err) => console.log(err))
  }

  const handleChange = (e) => {
    setImage(e.target.files[0])
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
        <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
          <p className="font-semibold text-gray-800">Claim Points</p>
        </div>

        <div className="flex flex-col px-6 py-5 bg-gray-50">
          <form onSubmit={handleUpload} className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-state"
                >
                  Product
                </label>
                <div className="relative">
                  <select
                    name="produk"
                    className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    {/* TODO */}
                    {props.data.map((product) => (
                      <option
                        onSelect={() => setPoints(product.points)}
                        key={product.id}
                        value={product.title}
                      >
                        {product.title}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Quantity
                </label>
                <input
                  name="qty"
                  className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="number"
                  placeholder="Qty"
                  min="1"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="uppercase tracking-wide text-gray-700 text-xs font-bold mr-4 mb-2"
                  htmlFor="grid-password"
                >
                  Faktur
                </label>
                <input className="inline" type="file" onChange={handleChange} />
              </div>
            </div>

            <p className="text-purple text-lg italic">
              Anda akan mendapatkan {points}{' '}
              <img
                alt="flower-icon"
                src={flower}
                className="inline w-6 ml-1 mb-1 rounded-full"
              />
            </p>
            <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
              <button
                type="submit"
                className="mx-auto px-4 py-2 text-white font-semibold bg-purple hover:bg-darkpurple rounded"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
        {/* TODO Test image */}
        <img src={url} alt="img" />
      </div>
    </div>
  )
}

export default Claim
