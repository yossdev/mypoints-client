// import Loading from '../../UI/atoms/Loading'
// import Error from '../../UI/organisms/Error'

import { GiftIcon } from '@primer/octicons-react'

// import { useQuery } from '@apollo/client'

const Transfer = () => {
  // const { loading, error } = useQuery({
  //   notifyOnNetworkStatusChange: true,
  // })

  // if (loading) return <Loading />
  // if (error) return <Error />

  return (
    <>
      <div className="ml-80 pt-3 font-roboto">
        <GiftIcon size={16} fill="darkgrey" />
        <span className="text-sm ml-2 text-darkgrey">/ Redeems</span>
        <br />
        <span className="text-md text-darkgrey font-bold">Bank Transfer</span>
      </div>

      <div
        style={{
          marginTop: '17px',
          width: '80%',
          float: 'right',
          padding: '20px',
        }}
      >
        <div className="mb-8 font-roboto">
          <span className="block mb-2 text-2xl text-darkgrey font-bold">
            Bank Transfer
          </span>

          <div
            style={{ width: '31%' }}
            className="inline-block mr-6 mb-4 rounded-lg overflow-hidden shadow-lg bg-white"
          >
            <div className="flex mx-auto w-16 justify-center mt-8">
              <img
                alt="uang"
                src="https://freeiconshop.com/wp-content/uploads/edd/money-flat.png"
                className="rounded-full border-solid border-white border-2 -mt-3"
              />
            </div>

            <div className="text-center px-3 pb-6 pt-2">
              <h3 className="text-2xl text-purple bold font-roboto">
                Rp 10.000
              </h3>
              <p className="mt-2 text-md font-roboto font-light">
                Kamu perlu menukarkan 100 MyPoints untuk mendapatkan hadiah ini.
              </p>
            </div>

            <div className="flex justify-center py-3 border-t">
              <div className="text-center">
                <button className="bg-white hover:bg-lightpurple text-purple text-sm font-roboto py-3 px-24 rounded-md">
                  Redeem Hadiah
                </button>
              </div>
            </div>
          </div>

          <div
            style={{ width: '31%' }}
            className="inline-block mr-6 mb-4 rounded-lg overflow-hidden shadow-lg bg-white"
          >
            <div className="flex mx-auto w-16 justify-center mt-8">
              <img
                alt="uang"
                src="https://freeiconshop.com/wp-content/uploads/edd/money-flat.png"
                className="rounded-full border-solid border-white border-2 -mt-3"
              />
            </div>

            <div className="text-center px-3 pb-6 pt-2">
              <h3 className="text-2xl text-purple bold font-roboto">
                Rp 20.000
              </h3>
              <p className="mt-2 text-md font-roboto font-light">
                Kamu perlu menukarkan 200 MyPoints untuk mendapatkan hadiah ini.
              </p>
            </div>

            <div className="flex justify-center py-3 border-t">
              <div className="text-center">
                <button className="bg-white hover:bg-lightpurple text-purple text-sm font-roboto py-3 px-24 rounded-md">
                  Redeem Hadiah
                </button>
              </div>
            </div>
          </div>

          <div
            style={{ width: '31%' }}
            className="inline-block mr-6 mb-4 rounded-lg overflow-hidden shadow-lg bg-white"
          >
            <div className="flex mx-auto w-16 justify-center mt-8">
              <img
                alt="uang"
                src="https://freeiconshop.com/wp-content/uploads/edd/money-flat.png"
                className="rounded-full border-solid border-white border-2 -mt-3"
              />
            </div>

            <div className="text-center px-3 pb-6 pt-2">
              <h3 className="text-2xl text-purple bold font-roboto">
                Rp 50.000
              </h3>
              <p className="mt-2 text-md font-roboto font-light">
                Kamu perlu menukarkan 500 MyPoints untuk mendapatkan hadiah ini.
              </p>
            </div>

            <div className="flex justify-center py-3 border-t">
              <div className="text-center">
                <button className="bg-white hover:bg-lightpurple text-purple text-sm font-roboto py-3 px-24 rounded-md">
                  Redeem Hadiah
                </button>
              </div>
            </div>
          </div>

          <div
            style={{ width: '31%' }}
            className="inline-block mr-6 mb-4 rounded-lg overflow-hidden shadow-lg bg-white"
          >
            <div className="flex mx-auto w-16 justify-center mt-8">
              <img
                alt="uang"
                src="https://freeiconshop.com/wp-content/uploads/edd/money-flat.png"
                className="rounded-full border-solid border-white border-2 -mt-3"
              />
            </div>

            <div className="text-center px-3 pb-6 pt-2">
              <h3 className="text-2xl text-purple bold font-roboto">
                Rp 100.000
              </h3>
              <p className="mt-2 text-md font-roboto font-light">
                Kamu perlu menukarkan 1000 MyPoints untuk mendapatkan hadiah
                ini.
              </p>
            </div>

            <div className="flex justify-center py-3 border-t">
              <div className="text-center">
                <button className="bg-white hover:bg-lightpurple text-purple text-sm font-roboto py-3 px-24 rounded-md">
                  Redeem Hadiah
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Transfer
