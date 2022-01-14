import flower from '../../../../assets/flower.svg'

const Main = (props) => {
  return (
    <div className="mb-8 font-roboto">
      <span className="block mb-2 text-xl text-darkgrey font-bold">
        Summary
      </span>

      <div className="flex justify-between">
        <div
          style={{ width: '22%' }}
          className="inline-block rounded-lg overflow-hidden shadow-lg bg-white pt-5 pb-12"
        >
          <div className="mx-5">
            <p className="my-2 text-sm font-roboto text-darkgrey">
              TOTAL POINT
            </p>
            <div className="flex p-3">
              <h3 className="text-4xl mr-5 text-purple font-bold font-poppins">
                {props.data.points}
              </h3>
              <img alt="uang" src={flower} className="w-10 h-10" />
            </div>
          </div>
        </div>

        <div
          style={{ width: '22%' }}
          className="inline-block rounded-lg overflow-hidden shadow-lg bg-white pt-5 pb-12"
        >
          <div className="mx-5">
            <p className="my-2 text-sm font-roboto text-darkgrey">
              TOTAL TRANSAKSI
            </p>
            <div className="flex p-3">
              <h3 className="text-4xl mr-5 text-purple font-bold font-poppins">
                {props.data.claims.aggregate.count +
                  props.data.redeems.aggregate.count}{' '}
                x
              </h3>
              <img alt="uang" src={flower} className="w-10 h-10" />
            </div>
          </div>
        </div>

        <div
          style={{ width: '22%' }}
          className="inline-block rounded-lg overflow-hidden shadow-lg bg-white pt-5 pb-12"
        >
          <div className="mx-5">
            <p className="my-2 text-sm font-roboto text-darkgrey">
              TOTAL KLAIM
            </p>
            <div className="flex p-3">
              <span className="text-4xl mr-5 text-purple font-bold font-poppins">
                {props.data.claims.aggregate.count} x
              </span>
              <img alt="uang" src={flower} className="w-10 h-10" />
            </div>
          </div>
        </div>

        <div
          style={{ width: '22%' }}
          className="inline-block rounded-lg overflow-hidden shadow-lg bg-white pt-5 pb-12"
        >
          <div className="mx-5">
            <p className="my-2 text-sm font-roboto text-darkgrey">
              TOTAL REDEEM
            </p>
            <div className="flex p-3">
              <span className="text-4xl mr-5 text-purple font-bold font-poppins">
                {props.data.redeems.aggregate.count} x
              </span>
              <img alt="uang" src={flower} className="w-10 h-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
