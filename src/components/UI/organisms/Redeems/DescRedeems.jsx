const DescRedeems = (props) => {
  const { cancelRedeem, errorAxios, handleChange, setDesc, handleRedeem } =
    props

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-700 bg-opacity-50">
      <div className="mx-auto flex-col items-center my-1 pt-4 px-8 bg-white shadow border border-purple rounded-lg">
        <form
          method="post"
          onSubmit={(e) => handleRedeem(e)}
          className="mx-auto w-full text-center items-center justify-center mb-4 rounded"
        >
          <div>
            <label className="text-sm font-roboto text-purple mb-4">
              Isi deskripsi untuk pengiriman hadiah.
            </label>

            <div className="text-sm font-roboto text-red">
              {errorAxios && <span>Points tidak cukup</span>}
            </div>

            <textarea
              onChange={handleChange}
              rows="10"
              cols="100"
              style={{ minHeight: '150px' }}
              className="px-3 py-2 my-3 text-sm leading-tight text-gray-700 border rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-purple hover:bg-darkpurple text-white text-sm font-roboto py-3 px-4 mr-4 rounded-md"
          >
            Dapatkan Hadiah
          </button>

          <button
            onClick={cancelRedeem}
            className="bg-white hover:bg-lightpurple text-red text-sm font-roboto py-3 px-4 rounded-md"
          >
            Batal
          </button>
        </form>
      </div>
    </div>
  )
}

export default DescRedeems
