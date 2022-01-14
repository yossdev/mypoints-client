import axios from 'axios'
import gift from '../../../assets/gifts.svg'
import { GiftIcon } from '@primer/octicons-react'
import { useState } from 'react'
import useJwtDecode from '../../../Hooks/useJwtDecode'

import { useQuery } from '@apollo/client'
import { GET_REWARD } from '../../../GraphQL/Query'

import Desc from '../../../components/UI/organisms/Redeems/DescRedeems'

import MainLoading from '../../UI/atoms/Spinner/MainLoading'
import Error from '../../UI/organisms/Error'

const Redeems = () => {
  document.title = 'Profile'
  document.body.style = 'background: #EEEEEE;'

  const JWT = useJwtDecode()
  const agentId = JWT.decoded.sub
  const api = `https://server.mypoints.site/api/v1/${agentId}/transactions/redeem`

  const redeemBody = {
    agent_id: agentId,
    points: 0,
    redeem_desc: '',
    reward_id: 0,
    title: '',
  }

  const [reqRedeem, setReqReedem] = useState(redeemBody)
  const [loadingAxios, setLoadingAxios] = useState(false)
  const [errorAxios, setErrorAxios] = useState()
  const [desc, setDesc] = useState(false)

  const { data, loading, error } = useQuery(GET_REWARD, {
    notifyOnNetworkStatusChange: true,
  })

  // for redeem description
  const handleChange = (e) => {
    const value = e.target.value
    setReqReedem({ ...reqRedeem, redeem_desc: value })
  }

  // submit redeem request
  const handleRedeem = (e) => {
    e.preventDefault()
    setLoadingAxios(true)

    axios
      .post(api, reqRedeem, {
        headers: { Authorization: `Bearer ${JWT.token}` },
      })
      .then((resp) => console.log(resp))
      .catch((err) => {
        setErrorAxios(err)
        console.log(errorAxios, 'error')
      })
      .finally(() => {
        setLoadingAxios(false)
        setReqReedem(redeemBody)
      })
  }

  if (loading || loadingAxios) return <MainLoading />
  if (error) return <Error />

  const rewards = data.rewards

  const handleClick = (e) => {
    const rewardId = e.target.value
    const reward = rewards.find((reward) => reward.id === parseInt(rewardId))

    setReqReedem({
      ...reqRedeem,
      reward_id: parseInt(rewardId),
      title: reward.title,
      points: reward.points,
    })

    setDesc(true)
  }

  const cancelRedeem = () => {
    setDesc(false)
    setReqReedem(redeemBody)
    setErrorAxios(null)
  }

  return (
    <>
      <div className="ml-80 pt-10 font-roboto">
        <GiftIcon size={20} fill="#5C5C5C" />
        <span className="text-lg text-darkgrey font-bold"> Redeem Hadiah</span>
      </div>
      <div
        style={{
          marginTop: '20px',
          marginRight: '10px',
          width: '83%',
          float: 'right',
          padding: '20px',
        }}
      >
        {/* Debug payload */}
        {/* <div>{JSON.stringify(reqRedeem, null, 2)}</div> */}

        <div className="mb-8 font-roboto">
          {rewards.map((reward) => (
            <div
              key={reward.id}
              style={{ width: '31%' }}
              className="inline-block mr-6 mb-4 rounded-lg overflow-hidden shadow-lg bg-white"
            >
              <div className="flex mx-auto w-16 justify-center mt-8">
                {reward.img !== '' ? (
                  <img
                    alt="reward icon"
                    src={reward.img}
                    className="border-solid border-white border-2 -mt-3"
                  />
                ) : (
                  <img alt="gift icon" src={gift} className="-mt-3" />
                )}
              </div>

              <div className="text-center px-3 pb-6 pt-2">
                <h3 className="text-2xl text-purple bold font-roboto">
                  {reward.title}
                </h3>
                <p className="mt-2 text-md font-roboto font-light">
                  Tukarkan {reward.points} MyPoints.
                </p>
              </div>

              <div className="flex justify-center py-3 border-t">
                <div className="text-center">
                  <button
                    value={reward.id}
                    onClick={handleClick}
                    className="bg-white hover:bg-lightpurple text-purple text-sm font-roboto py-3 px-24 rounded-md"
                  >
                    Redeem Hadiah
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {desc && (
          <Desc
            errorAxios={errorAxios}
            handleRedeem={handleRedeem}
            handleChange={handleChange}
            setDesc={setDesc}
            cancelRedeem={cancelRedeem}
          />
        )}
      </div>
    </>
  )
}

export default Redeems
