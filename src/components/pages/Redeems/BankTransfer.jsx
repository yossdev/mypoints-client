import gift from '../../../assets/gifts.svg'
import { GiftIcon } from '@primer/octicons-react'

import { useQuery } from '@apollo/client'
import { GET_REWARD } from '../../../GraphQL/Query'

import MainLoading from '../../UI/atoms/Spinner/MainLoading'
import Error from '../../UI/organisms/Error'

const Transfer = () => {
  document.title = 'Profile'
  document.body.style = 'background: #EEEEEE;'

  const { data, loading, error } = useQuery(GET_REWARD, {
    notifyOnNetworkStatusChange: true,
  })

  if (loading) return <MainLoading />
  if (error) return <Error />

  const reward = data.rewards[0]

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
          {reward.map((id, img, title, points) => (
            <div
              style={{ width: '31%' }}
              className="inline-block mr-6 mb-4 rounded-lg overflow-hidden shadow-lg bg-white"
            >
              <div className="flex mx-auto w-16 justify-center mt-8">
                {data.reward.img !== '' ? (
                  <img
                    alt="reward icon"
                    src={img}
                    className="border-solid border-white border-2 -mt-3"
                  />
                ) : (
                  <img alt="gift icon" src={gift} className="-mt-3" />
                )}
              </div>

              <div className="text-center px-3 pb-6 pt-2">
                <h3 className="text-2xl text-purple bold font-roboto">
                  {title}
                </h3>
                <p className="mt-2 text-md font-roboto font-light">
                  Tukarkan {points} MyPoints.
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
          ))}
        </div>
      </div>
    </>
  )
}

export default Transfer
