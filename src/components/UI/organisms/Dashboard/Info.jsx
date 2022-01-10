import flower from '../../../../assets/flower.svg'

const Info = () => {
  return (
    <div className="mb-8 font-roboto">
      <div
        style={{ width: '22%' }}
        className="inline-block mr-6 rounded-lg overflow-hidden shadow-lg bg-white pt-5 pb-24"
      >
        <div className="flex mx-auto justify-center">
          <div className="flex-initial mr-4">
            <p className="my-2 text-sm font-roboto text-darkgrey">
              TOTAL POINT
            </p>

            <h3 className="text-4xl text-purple font-bold font-poppins">
              10.000
            </h3>
          </div>

          <img
            alt="uang"
            src={flower}
            className="flex-initial w-12 ml-4 rounded-full"
          />
        </div>
      </div>

      <div
        style={{ width: '22%' }}
        className="inline-block mr-6 rounded-lg overflow-hidden shadow-lg bg-white pt-5 pb-24"
      >
        <div className="flex mx-auto justify-center">
          <div className="flex-initial mr-4">
            <p className="my-2 text-sm font-roboto text-darkgrey">
              TOTAL TRANSAKSI
            </p>

            <h3 className="text-4xl text-purple font-bold font-poppins">
              10 x
            </h3>
          </div>

          <img
            alt="uang"
            src={flower}
            className="flex-initial w-12 ml-4 rounded-full"
          />
        </div>
      </div>

      <div
        style={{ width: '22%' }}
        className="inline-block mr-6 rounded-lg overflow-hidden shadow-lg bg-white pt-5 pb-24"
      >
        <div className="flex mx-auto justify-center">
          <div className="flex-initial mr-4">
            <p className="my-2 text-sm font-roboto text-darkgrey">
              TOTAL KLAIM
            </p>

            <h3 className="text-4xl text-purple font-bold font-poppins">5 x</h3>
          </div>

          <img
            alt="uang"
            src={flower}
            className="flex-initial w-12 ml-4 rounded-full"
          />
        </div>
      </div>

      <div
        style={{ width: '22%' }}
        className="inline-block mr-6 rounded-lg overflow-hidden shadow-lg bg-white pt-5 pb-24"
      >
        <div className="flex mx-auto justify-center">
          <div className="flex-initial mr-4">
            <p className="my-2 text-sm font-roboto text-darkgrey">
              TOTAL REDEEM
            </p>

            <h3 className="text-4xl text-purple font-bold font-poppins">5 x</h3>
          </div>

          <img
            alt="uang"
            src={flower}
            className="flex-initial w-12 ml-4 rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Info
