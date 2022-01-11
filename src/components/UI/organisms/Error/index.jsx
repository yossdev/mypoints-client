import logo from '../../../../assets/logo.svg'

const PageError = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-grey">
      <section className="text-center mx-6 lg:w-2/3">
        <img className="m-auto w-24 lg:w-48" src={logo} alt="logo" />
        <h1 className="mt-2 mb-1 text-2xl lg:text-3xl">We'll be back soon!</h1>
        <div>
          <p>
            Sorry for the inconvenience. We&rsquo;re performing some maintenance
            at the moment. We will give an update soon.
          </p>
          <p className="mt-4">Team MyPoints</p>
        </div>
      </section>
    </div>
  )
}

export default PageError
