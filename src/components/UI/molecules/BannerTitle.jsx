import ButtonLogin from '../atoms/Button'

const BannerTitle = () => {
  return (
    <div className="flex md:w-3/6 flex-col justify-center md:text-left ml-16">
      <h1 className="mb-4 text-5xl font-bold leading-tight text-purple font-poppins">
        Jual produknya, <br />
        Kumpulkan poinnya, <br />
        Dapatkan hadiahnya!!
      </h1>
      <p className="leading-normal text-md mb-8">
        Sub-hero message, not too long and not too short. Make it just right!
      </p>
    </div>
  )
}

export default BannerTitle
