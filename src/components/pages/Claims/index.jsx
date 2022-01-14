import { TagIcon } from '@primer/octicons-react'
import Claim from '../../UI/organisms/Claim'
import MainLoading from '../../UI/atoms/Spinner/MainLoading'
import Error from '../../UI/organisms/Error'

import { useQuery } from '@apollo/client'
import { GET_PRODUCT } from '../../../GraphQL/Query'

const Claims = () => {
  document.title = 'Claims'
  document.body.style = 'background: #EEEEEE;'

  const { data, loading, error } = useQuery(GET_PRODUCT, {
    notifyOnNetworkStatusChange: true,
  })

  if (loading) return <MainLoading />
  if (error) return <Error />

  return (
    <>
      <div className="ml-80 pt-10 font-roboto">
        <TagIcon size={20} fill="#5C5C5C" />
        <span className="text-lg text-darkgrey font-bold"> Claims</span>
      </div>

      <div
        style={{
          marginTop: '20px',
          width: '85%',
          float: 'right',
          padding: '20px',
        }}
      >
        <Claim data={data.products} />
      </div>
    </>
  )
}

export default Claims
