import moment from 'moment'
import { useState } from 'react'
import Pagination from './Pagination'

const Table = (props) => {
  const [allHistory, setAllHistory] = useState(props.data)
  const [start, setStart] = useState(0)

  const totalRender = 10

  const handlePrev = () => {
    setStart(start - totalRender)
  }

  const handleNext = () => {
    setStart(start + totalRender)
  }

  const handleFilterType = (e) => {
    switch (e.target.value) {
      case 'Approved':
        let approve = props.data.transactions.filter(
          (t) => t.status === 'Approved'
        )
        setAllHistory({ transactions: approve })
        break
      case 'Rejected':
        let reject = props.data.transactions.filter(
          (t) => t.status === 'Rejected'
        )
        setAllHistory({ transactions: reject })
        break
      case 'Pending':
        let pending = props.data.transactions.filter(
          (t) => t.status === 'Pending'
        )
        setAllHistory({ transactions: pending })
        break
      case 'Settled':
        let settle = props.data.transactions.filter(
          (t) => t.status === 'Settled'
        )
        setAllHistory({ transactions: settle })
        break
      case 'Expired':
        let expire = props.data.transactions.filter(
          (t) => t.status === 'Expired'
        )
        setAllHistory({ transactions: expire })
        break
      default:
        setAllHistory(props.data)
        break
    }
  }

  return (
    <div>
      {/* Filter Option */}
      <div className="my-2">
        <label className="inline mb-2 text-md font-bold text-purple font-roboto">
          Filter by Status:
        </label>
        <select
          onChange={handleFilterType}
          defaultValue={'all'}
          className="w-28 ml-4 h-10 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded"
        >
          <option value="all" className="p-2">
            All
          </option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
          <option value="Pending">Pending</option>
          <option value="Settled">Settled</option>
          <option value="Expired">Expired</option>
        </select>
      </div>

      <div className="font-roboto">
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
            {allHistory.transactions.map((transaction, idx) => {
              if (idx >= start && idx <= start + totalRender) {
                return (
                  <tr className="text-center" key={transaction.id}>
                    <td className="py-3 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
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
                )
              }
            })}
          </tbody>
        </table>
      </div>

      <Pagination
        prev={handlePrev}
        next={handleNext}
        start={start}
        len={allHistory.transactions.length}
        totalRender={totalRender}
      />
    </div>
  )
}

export default Table
