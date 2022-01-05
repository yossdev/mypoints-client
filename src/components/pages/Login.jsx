import { useState } from 'react'
import axios from 'axios'

import logo from '../UI/atoms/logo.svg'
import agent from '../UI/atoms/agent.svg'

const baseURL = 'https://server.mypoints.site/api/v1/login'

const Login = () => {
  document.title = 'Login'

  const dataLogin = {
    email: '',
    password: '',
  }

  const [reqBody, setReqBody] = useState(dataLogin)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const handleChange = (e) => {
    const value = e.target.value
    setReqBody({
      ...reqBody,
      [e.target.name]: value,
    })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    setLoading(true)
    axios
      .post(baseURL, reqBody)
      .then(function (response) {
        // dispatch redux untuk simpan jwt access token
        console.log('berhasil login', response.data.data)
      })
      .catch(function (err) {
        setError(err)
        // console.log('ada error', err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  if (loading) return <h1>loading...</h1>
  // if (error) return <h1>error...</h1>

  return (
    <div className="flex items-center">
      <div className="mx-auto w-1/4 font-roboto space-y-6 bg-white shadow-lg border border-purple rounded-lg px-5 pb-8">
        <form method="post" className="space-y-6" onSubmit={handleLogin}>
          <img className="mx-auto" alt="logo ungu" src={logo} width={175} />
          <h3 className="text-xl text-center font-medium text-purple">
            Selamat Datang Para Agen
          </h3>

          {error && <h1>ga berhasil login...</h1>}

          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-purple block mb-2"
            >
              e-mail
            </label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-purple block mb-2"
            >
              password
            </label>

            <input
              onChange={handleChange}
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-purple hover:bg-darkpurple focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Login
          </button>
        </form>
      </div>

      <div className="w-1/2 h-screen bg-purple items-center">
        <img
          className="flex mx-auto mt-16"
          alt="banner agent"
          src={agent}
          width={350}
        />
        <h1 className="mt-6 text-center text-4xl font-bold leading-tight text-white font-poppins">
          Jual produknya, <br />
          Kumpulkan poinnya, <br />
          Dapatkan hadiahnya!!
        </h1>
      </div>
    </div>
  )
}

export default Login
