import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import Bus  from "../../src/images/Bus.png"


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <main className="bg-blue-50 w-full font-medium font-[Noto-Sans] relative">
        <nav className="flex items-center justify-between px-4 sm:px-6 py-4">
          <div>
            <img src={Bus} alt="bus-rental-logo" className="h-15 w-30 cursor-pointer" />
            {/* <h1 className="text-lg sm:text-2xl text-black font-bold">Bus Rental Logo</h1> */}
          </div>

          {/* Desktop links */}
          <div className="hidden lg:flex space-x-3">
            <Link to="/vehicle-rental">
              <li className="text-black list-none cursor-pointer">Vehicle Rental</li>
            </Link>
            <Link to="/event">
              <li className="text-black list-none cursor-pointer">Event</li>
            </Link>
            <Link to="/business-rental">
              <li className="text-black list-none cursor-pointer">Business Rental</li>
            </Link>
          </div>

          <div className="hidden lg:flex space-x-5 justify-end">
            <Link to="/login-as">
              <button className="bg-white border-0 h-10 w-40 cursor-pointer rounded-full justify-center">
                <li className="text-black list-none">Login</li>
              </button>
            </Link>

            <Link to="/register-as">
              <button className="bg-green-400 h-10 w-40 rounded-full cursor-pointer">
                <li className="text-white list-none">Register</li>
              </button>
            </Link>
          </div>

          <button
            className="lg:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {isOpen && (
          <div className="lg:hidden flex flex-col gap-4 px-4 sm:px-6 pb-6 bg-blue-50">
            <Link to="/vehicle-rental" onClick={() => setIsOpen(false)}>
              <li className="text-black list-none cursor-pointer">Vehicle Rental</li>
            </Link>
            <Link to="/event" onClick={() => setIsOpen(false)}>
              <li className="text-black list-none cursor-pointer">Event</li>
            </Link>
            <Link to="/business-rental" onClick={() => setIsOpen(false)}>
              <li className="text-black list-none cursor-pointer">Business Rental</li>
            </Link>

            <div className="flex flex-col gap-3 pt-2">
              <Link to="/login-as" onClick={() => setIsOpen(false)}>
                <button className="bg-white border-0 cursor-pointer w-full text-left">
                  <li className="text-black list-none">Login</li>
                </button>
              </Link>

              <Link to="/register-as" onClick={() => setIsOpen(false)}>
                <button className="bg-green-400 h-10 w-full rounded-full cursor-pointer">
                  <li className="text-white list-none">Register</li>
                </button>
              </Link>
            </div>
          </div>
        )}
      </main>
    </>
  )
}

export default NavBar