import logo from '../../../assets/logo.svg'

const PageError = () => {
  return (
    <div class="flex items-center justify-center min-h-screen bg-grey">
      <section class="text-center mx-6 lg:w-2/3">
        <img class="m-auto w-24 lg:w-48" src={logo} />
        <h1 class="mt-2 mb-1 text-2xl lg:text-3xl">We'll be back soon!</h1>
        <div>
          <p>
            Sorry for the inconvenience. We&rsquo;re performing some maintenance
            at the moment. We will give an update soon.
          </p>
          <p class="mt-4">Team MyPoints</p>
        </div>
      </section>
    </div>
  )
}

export default PageError
