const RespRedeems = (props) => {
  const { setResp } = props

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-700 bg-opacity-50">
      <div className="mx-auto text-center flex-col items-center my-1 py-4 px-8 bg-white shadow border border-purple rounded-lg">
        <div className="mt-2 pb-3 text-sm text-purple italic font-roboto">
          Proses redeem berhasil, silahkan tunggu beberapa saat.
        </div>

        <button
          onClick={() => setResp(false)}
          className="bg-purple mb-2 hover:bg-darkpurple text-white text-sm font-roboto py-2 px-4 mr-4 rounded-md"
        >
          O K
        </button>
      </div>
    </div>
  )
}

export default RespRedeems
