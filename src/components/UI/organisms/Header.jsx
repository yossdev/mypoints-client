import logo from '../atoms/logo.svg'

function Header() {
  return (
    <div className="h-screen bg-[#eeeeee]">
      <div className="float-right h-16 bg-white flex items-center w-full p-3 shadow-md border-t-8 border-[#5F2788]">
        <img className="ml-20" alt="logo ungu" src={logo} width={175} />
      </div>
    </div>
  )
}

export default Header
