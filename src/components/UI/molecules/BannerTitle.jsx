import ButtonLogin from '../atoms/Button'

const BannerTitle = () => {
  return (
    <div className="flex md:w-3/6 flex-col justify-center md:text-left ml-16">
      <h1 className="mb-4 text-5xl font-bold leading-tight text-purple font-poppins">
        Jual produknya, <br />
        Kumpulkan poinnya, <br />
        Dapatkan hadiahnya!!
      </h1>
      <p className="leading-normal text-md my-8 font-roboto-300">
        MyPoints merupakan bentuk apresiasi kepada Anda para agen. Nikmati
        keuntungan dari setiap transaksi dengan mendapatkan saldo MyPoints yang
        dapat ditukarkan dengan berbagai hadiah menarik.
      </p>
    </div>
  )
}

export default BannerTitle
