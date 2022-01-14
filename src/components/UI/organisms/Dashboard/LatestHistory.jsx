import moment from 'moment'

const LatestHistory = (props) => {
  return (
    <>
      <span className="block mb-2 text-xl text-darkgrey font-bold font-roboto">
        Latest History
      </span>

      <table className="w-full shadow-lg font-roboto">
        <thead>
          <tr>
            <th className="rounded-tl-lg py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase tracking-wider">
              TITLE
            </th>

            <th className="py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase tracking-wider">
              TYPE
            </th>

            <th className="py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase tracking-wider">
              POINTS
            </th>

            <th className="py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase tracking-wider">
              DATE
            </th>

            <th className="rounded-tr-lg py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase tracking-wider">
              STATUS
            </th>
          </tr>
        </thead>
        <tbody>
          {props.data.transactions.map((transaction) => (
            <tr className="text-center" key={transaction.id}>
              <td className="py-3 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap font-bold">
                  {transaction.title}
                </p>
              </td>

              <td className="py-3 border-b border-gray-200 bg-white text-sm">
                <p>{transaction.type}</p>
              </td>

              <td className="py-3 border-b border-gray-200 bg-white text-sm">
                <p
                  className={
                    transaction.type === 'Debit'
                      ? 'text-green'
                      : transaction.type === 'Credit'
                      ? 'text-red'
                      : ''
                  }
                >
                  {transaction.type === 'Debit' ? (
                    <span>+{transaction.points}</span>
                  ) : (
                    <span>-{transaction.points}</span>
                  )}
                </p>
              </td>

              <td className="py-3 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                  {moment(transaction.created_at).format('LL')}
                </p>
              </td>

              <td className="py-3 border-b border-gray-200 bg-white text-sm">
                <span className="relative inline-block px-3 py-1 text-gray-700 leading-tight">
                  <span
                    aria-hidden
                    className={
                      transaction.status === 'Pending'
                        ? 'absolute inset-0 opacity-50 bg-yellow rounded-full'
                        : transaction.status === 'Settled' ||
                          transaction.status === 'Approved'
                        ? 'absolute inset-0 opacity-50 bg-green rounded-full'
                        : transaction.status === 'Rejected' ||
                          transaction.status === 'Expired'
                        ? 'absolute inset-0 opacity-50 bg-red rounded-full'
                        : ''
                    }
                  />
                  <span className="relative">{transaction.status}</span>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default LatestHistory
