import axios from 'axios'
import gift from '../../../assets/gifts.svg'
import { GiftIcon } from '@primer/octicons-react'
import { useState } from 'react'
import useJwtDecode from '../../../Hooks/useJwtDecode'

import { useQuery } from '@apollo/client'
import { GET_REWARD } from '../../../GraphQL/Query'

import Desc from '../../../components/UI/organisms/Redeems/DescRedeems'
import RespRedeems from '../../UI/organisms/Redeems/RespRedeems'

import PageCashOut from '../../UI/organisms/Redeems/PageCashOut'
import PageEMoney from '../../UI/organisms/Redeems/PageEMoney'
import PageDigitalProduct from '../../UI/organisms/Redeems/PageDigitalProduct'

import MainLoading from '../../UI/atoms/Spinner/MainLoading'
import Error from '../../UI/organisms/Error'

const Redeems = () => {
  document.title = 'Redeems'
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
  const [resp, setResp] = useState(false)

  const { data, loading, error } = useQuery(GET_REWARD, {
    notifyOnNetworkStatusChange: true,
  })

  //Pagination CashOut
  const [startCash, setStartCash] = useState(0)

  const totalRender = 10

  const handlePrevCash = () => {
    setStartCash(startCash - totalRender)
  }

  const handleNextCash = () => {
    setStartCash(startCash + totalRender)
  }

  //Pagination E-Money
  const [startEmoney, setStartEmoney] = useState(0)

  const handlePrevEmoney = () => {
    setStartEmoney(startEmoney - totalRender)
  }

  const handleNextEmoney = () => {
    setStartEmoney(startEmoney + totalRender)
  }

  //Pagination Digital Product
  const [startDigital, setStartDigital] = useState(0)

  const handlePrevDigital = () => {
    setStartDigital(startDigital - totalRender)
  }

  const handleNextDigital = () => {
    setStartDigital(startDigital + totalRender)
  }

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
      .then((resp) => {
        setDesc(false)
        setResp(true)
        // console.log(resp)
      })
      .catch((err) => {
        setErrorAxios(err)
        // console.log(errorAxios, 'error')
      })
      .finally(() => {
        setLoadingAxios(false)
        setReqReedem(redeemBody)
      })
  }

  if (loading || loadingAxios) return <MainLoading />
  if (error) return <Error />

  const e_money = data.e_money
  const cash_out = data.cash_out
  const digital_product = data.digital_product

  const findReward = (id, args) => {
    switch (args) {
      case 'E_MONEY':
        return e_money.find((reward) => reward.id === parseInt(id))
      case 'CASH_OUT':
        return cash_out.find((reward) => reward.id === parseInt(id))
      case 'DIGITAL_PRODUCT':
        return digital_product.find((reward) => reward.id === parseInt(id))
      default:
        break
    }
  }

  const handleClick = (rewardId, category) => {
    const reward = findReward(rewardId, category)

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

        {/* cash out */}
        <div id="cash-out" className="p-2">
          <h1 className="text-2xl font-semibold font-poppins pb-1">Cash Out</h1>
          <hr />
        </div>
        <div className="mb-8 font-roboto">
          {cash_out.map((reward, idx) => {
            if (idx >= startCash && idx <= startCash + totalRender) {
              return (
                <div
                  key={reward.id}
                  style={{ width: '23%' }}
                  className="inline-block mr-6 mb-4 rounded-lg overflow-hidden shadow-lg bg-white"
                >
                  <div className="flex mx-auto w-24 justify-center mt-8">
                    {reward.img !== '' ? (
                      <img
                        alt="reward icon"
                        src={reward.img}
                        className="-mt-3"
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
                        onClick={() => handleClick(reward.id, reward.category)}
                        className="bg-white hover:bg-lightpurple text-purple text-sm font-roboto py-3 px-24 rounded-md"
                      >
                        Redeem Hadiah
                      </button>
                    </div>
                  </div>
                </div>
              )
            }
          })}

          <PageCashOut
            prev={handlePrevCash}
            next={handleNextCash}
            start={startCash}
            len={cash_out.length}
            totalRender={totalRender}
          />
        </div>

        {/* e-money */}
        <div id="e-money" className="p-2">
          <h1 className="text-2xl font-semibold font-poppins pb-1">E-Money</h1>
          <hr />
        </div>
        <div className="mb-8 font-roboto">
          {e_money.map((reward, idx) => {
            if (idx >= startEmoney && idx <= startEmoney + totalRender) {
              return (
                <div
                  key={reward.id}
                  style={{ width: '23%' }}
                  className="inline-block mr-6 mb-4 rounded-lg overflow-hidden shadow-lg bg-white"
                >
                  <div className="flex mx-auto w-24 justify-center mt-8">
                    {reward.img !== '' ? (
                      <img
                        alt="reward icon"
                        src={reward.img}
                        className="-mt-3"
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
                        onClick={() => handleClick(reward.id, reward.category)}
                        className="bg-white hover:bg-lightpurple text-purple text-sm font-roboto py-3 px-24 rounded-md"
                      >
                        Redeem Hadiah
                      </button>
                    </div>
                  </div>
                </div>
              )
            }
          })}

          <PageEMoney
            prev={handlePrevEmoney}
            next={handleNextEmoney}
            start={startEmoney}
            len={e_money.length}
            totalRender={totalRender}
          />
        </div>

        {/* digital product */}
        <div id="digital-product" className="p-2">
          <h1 className="text-2xl font-semibold font-poppins pb-1">
            Pulsa / Paket Data
          </h1>
          <hr />
        </div>
        <div className="mb-8 font-roboto">
          {digital_product.map((reward, idx) => {
            if (idx >= startDigital && idx <= startDigital + totalRender) {
              return (
                <div
                  key={reward.id}
                  style={{ width: '23%' }}
                  className="inline-block mr-6 mb-4 rounded-lg overflow-hidden shadow-lg bg-white"
                >
                  <div className="flex mx-auto w-24 justify-center mt-8">
                    {reward.img !== '' ? (
                      <img
                        alt="reward icon"
                        src={reward.img}
                        className="-mt-3"
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
                        onClick={() => handleClick(reward.id, reward.category)}
                        className="bg-white hover:bg-lightpurple text-purple text-sm font-roboto py-3 px-24 rounded-md"
                      >
                        Redeem Hadiah
                      </button>
                    </div>
                  </div>
                </div>
              )
            }
          })}

          <PageDigitalProduct
            prev={handlePrevDigital}
            next={handleNextDigital}
            start={startDigital}
            len={digital_product.length}
            totalRender={totalRender}
          />
        </div>

        {desc && (
          <Desc
            reqRedeem={reqRedeem}
            errorAxios={errorAxios}
            handleRedeem={handleRedeem}
            handleChange={handleChange}
            setDesc={setDesc}
            cancelRedeem={cancelRedeem}
          />
        )}

        {resp && <RespRedeems setResp={setResp} />}
      </div>
    </>
  )
}

export default Redeems
