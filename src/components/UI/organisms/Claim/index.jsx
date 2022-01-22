import { useState } from 'react'

import flower from '../../../../assets/flower.svg'
import indomie from '../../../../assets/indomie.jpg'

import axios from 'axios'
import MainLoading from '../../atoms/Spinner/MainLoading'
import useJwtDecode from '../../../../Hooks/useJwtDecode'

const Claim = (props) => {
  const JWT = useJwtDecode()
  const agentId = JWT.decoded.sub
  const api = `https://server.mypoints.site/api/v1/${agentId}/transactions/claims`

  const claimsBody = {
    agent_id: agentId,
    nota_img: '',
    points: props.data[0].points,
    product_id: parseInt(props.data[0].id),
    title: props.data[0].title,
  }

  const [qty, setQty] = useState(1)
  const [points, setPoints] = useState(props.data[0].points)
  const [totalPoints, setTotalPoints] = useState(props.data[0].points)

  const [image, setImage] = useState('')

  const [reqClaims, setReqClaims] = useState(claimsBody)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [success, setSuccess] = useState()

  const [productImg, setProductImg] = useState(props.data[0].img)

  const handleProduct = (e) => {
    const productId = e.target.value
    const product = props.data.find(
      (product) => product.id === parseInt(productId)
    )

    setProductImg(product.img)

    setPoints(product.points)
    setTotalPoints(product.points * qty)

    setReqClaims({
      ...reqClaims,
      product_id: parseInt(productId),
      title: product.title,
      points: product.points * qty,
    })
  }

  const handleQty = (e) => {
    setQty(e.target.value)
    setTotalPoints(points * e.target.value)
    setReqClaims({ ...reqClaims, points: points * e.target.value })
  }

  const handleImg = (e) => {
    setImage(e.target.files[0])
  }

  // upload image to cloudinary
  const cloudinary = async () => {
    const data = new FormData()
    data.append('file', image)
    data.append('upload_preset', 'mypoints_media')
    data.append('cloud_name', 'mypoints')
    data.append('secure', true)

    try {
      const resp = await axios.post(
        'https://api.cloudinary.com/v1_1/mypoints/image/upload',
        data
      )
      return resp
    } catch (err) {
      return err.json()
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError()
    setSuccess()

    let cld
    try {
      cld = await cloudinary()
    } catch (err) {
      setError(err)
      setLoading(false)
    }

    axios
      .post(
        api,
        { ...reqClaims, nota_img: cld?.data.url },
        {
          headers: { Authorization: `Bearer ${JWT.token}` },
        }
      )
      .then((response) => setSuccess(response))
      .catch((err) => setError(err))
      .finally(() => {
        setLoading(false)
        setReqClaims(claimsBody)
      })
  }

  if (loading) return <MainLoading />

  return (
    <div className="flex justify-center items-center font-roboto">
      <div className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
        {/* for debugging */}
        {/* <div>{JSON.stringify(reqClaims, null, 2)}</div> */}

        <div className="flex flex-row justify-between px-6 py-3 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
          <p className="font-semibold text-gray-800">Claim Points</p>
        </div>

        <div className="flex flex-col items-center px-6 pt-2 pb-5 bg-gray-50">
          <div className="mx-auto">
            {productImg !== '' ? (
              <img
                src={productImg}
                className="max-w-64 mb-4"
                alt="productImg"
              />
            ) : (
              <img src={indomie} className="max-w-64 mb-4" alt="productImg" />
            )}
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-state"
                >
                  Product <span className="text-red">*</span>
                </label>
                <div className="relative">
                  <select
                    onChange={handleProduct}
                    name="produk"
                    className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    {props.data.map((product) => (
                      <option key={product.id} value={product.id}>
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
                  Quantity <span className="text-red">*</span>
                </label>
                <input
                  onChange={handleQty}
                  name="qty"
                  className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="number"
                  defaultValue={1}
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
                  Faktur <span className="text-red">*</span>
                </label>
                <input
                  className="inline font-light"
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={handleImg}
                />
              </div>
            </div>

            <p className="text-purple text-lg italic">
              Anda akan mendapatkan {totalPoints}{' '}
              <img
                alt="flower-icon"
                src={flower}
                className="inline w-6 ml-1 mb-1 rounded-full"
              />
            </p>

            <div className="mt-8 text-sm text-red italic">* Wajib diisi</div>

            {error ? (
              <div className="mt-6 text-sm text-center text-red italic">
                Terjadi kesalahan, silahkan coba lagi!
              </div>
            ) : null}

            {success ? (
              <div className="mt-6 text-sm text-center text-purple italic">
                Proses klaim berhasil, silahkan tunggu konfirmasi dari Admin.
              </div>
            ) : null}

            <div className="flex justify-center items-center mt-7">
              <button
                type="submit"
                className="mx-auto px-4 py-2 text-white font-semibold bg-purple hover:bg-darkpurple rounded"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Claim
