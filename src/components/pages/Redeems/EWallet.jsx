// import MainLoading from '../../UI/atoms/Spinner/MainLoading'
// import Error from '../../UI/organisms/Error'

// import gift from '../../../assets/gifts.svg'
import { GiftIcon } from '@primer/octicons-react'

// import { useQuery } from '@apollo/client'

const EWallet = () => {
  document.title = 'Profile'
  document.body.style = 'background: #EEEEEE;'

  // const { data, loading, error } = useQuery({
  //   notifyOnNetworkStatusChange: true,
  // })

  // if (loading) return <MainLoading />
  // if (error) return <Error />

  return (
    <>
      <div className="ml-80 pt-3 font-roboto">
        <GiftIcon size={16} fill="darkgrey" />
        <span className="text-sm ml-2 text-darkgrey">/ Redeems</span>
        <br />
        <span className="text-md text-darkgrey font-bold">E - Wallet</span>
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
          <div
            style={{ width: '31%' }}
            className="inline-block mr-6 mb-4 rounded-lg overflow-hidden shadow-lg bg-white"
          >
            <div className="flex mx-auto w-16 justify-center mt-8">
              {/* TODO */}
              {/* {reward.img !== '' ? (
                <img
                  alt="reward icon"
                  src={reward.img}
                  className="border-solid border-white border-2 -mt-3"
                />
              ) : (
                <img alt="gift icon" src="gifts.svg" className="-mt-3" />
              )} */}
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
        </div>
      </div>
    </>
  )
}

export default EWallet
