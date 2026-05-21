import { Link } from "react-router-dom"
import Bus from "../assets/images/Bus.png"

const NavBar = () => {
  return (
    <>
      <main className="bg-blue-50 w-full h-20 font-medium font-[Noto-Sans]">          
        <nav className="flex px-6 py-6 justify-between">
          <div>
            {/* <img src={Bus} alt="bus-rental-logo" className="h-15 w-30 cursor-pointer" /> */}
            <h1 className="text-2xl text-black font-bold">Bus Rental Logo</h1>
          </div>
          <div className="flex space-x-3 cursor-pointer">
            <Link to="/vehicle-rental">
              <li className="text-black list-none">Vehicle Rental</li>
            </Link>
            <Link to="/event">
              <li className="text-black list-none">Event</li>
            </Link>
            <Link to="/business-rental">
              <li className="text-black list-none">Business Rental</li>
            </Link>
          </div>

          <div className="flex space-x-5 justify-end">
            <Link to="/login-as">
              <button className="bg-white border-0 cursor-pointer justify-center">
                <li className="text-black list-none">Login</li>
              </button>
            </Link>

            <Link to="/register-as">
              <button className="bg-green-400 h-10 w-40 rounded-full cursor-pointer">
                <li className="text-white list-none">Register</li>
              </button>
            </Link>
          </div>
        </nav>
      </main>
    </>
  )
}

export default NavBar