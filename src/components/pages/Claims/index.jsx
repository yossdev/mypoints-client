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
      <div className="ml-80 pt-3 font-roboto">
        <TagIcon size={16} fill="darkgrey" />
        <span className="text-sm ml-2 text-darkgrey">/ Claims</span> <br />
        <span className="text-md text-darkgrey font-bold">Claims</span>
      </div>

      <div
        style={{
          marginTop: '17px',
          width: '80%',
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
