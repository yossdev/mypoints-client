const Table = (props) => {
  return (
    <table className="w-full shadow-lg font-roboto">
      <thead>
        <tr>
          <th className="rounded-tl-lg py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase">
            TITLE
          </th>

          <th className="py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase">
            TYPE
          </th>

          <th className="py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase">
            POINTS
          </th>

          <th className="py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase">
            DATE
          </th>

          <th className="rounded-tr-lg py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase">
            STATUS
          </th>
        </tr>
      </thead>
      <tbody>
        {props.data.transactions.map((transaction) => (
          <tr className="text-center" key={transaction.id}>
            <td className="py-3 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
                {transaction.title}
              </p>
            </td>

            <td className="py-3 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
                {transaction.type}
              </p>
            </td>

            <td className="py-3 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
                {transaction.points}
              </p>
            </td>

            <td className="py-3 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
                {transaction.created_at}
              </p>
            </td>

            <td className="py-3 border-b border-gray-200 bg-white text-sm">
              <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                <span
                  aria-hidden
                  className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                ></span>
                <span className="relative">{transaction.status}</span>
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
