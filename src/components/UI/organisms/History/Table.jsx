// import Loading from '../../atoms/Loading'
// import Error from '../Error'

// import { useQuery } from '@apollo/client'

const Table = () => {
  // const { loading, error } = useQuery({
  //   notifyOnNetworkStatusChange: true,
  // })

  // if (loading) return <Loading />
  // if (error) return <Error />

  return (
    <table className="w-full table-auto shadow-lg">
      <thead>
        <tr>
          <th className="rounded-tl-lg px-10 py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase tracking-wider">
            TITLE
          </th>
          <th className="px-10 py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase tracking-wider">
            DATE
          </th>
          <th className="px-10 py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase tracking-wider">
            TYPE
          </th>
          <th className="rounded-tr-lg px-10 py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase tracking-wider">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-10 py-3 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">Admin</p>
          </td>
          <td className="px-10 py-3 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
          </td>
          <td className="px-10 py-3 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">43</p>
          </td>
          <td className="px-10 py-3 border-b border-gray-200 bg-white text-sm">
            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
              <span
                aria-hidden
                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
              ></span>
              <span className="relative">Activo</span>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table
