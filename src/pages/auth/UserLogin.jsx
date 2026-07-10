import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

const UserLogin = () => {
  const [name, setName] = useState()
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: ""
  })



  const handleChange = (e) => {
    const { name, value } = e.target
    setName((prev) => ({...prev, [name]: value}))
  }

  const handleSubmit = async () => {
    const apiResponse = await axios.post("http://www.onrender.com/api/auth/login", userLogin)
    const { token, user } = apiResponse.data

    localStorage.setItem("user login token", token)
    if(apiResponse == 200) {
      setMessage("User logged in successfully", user)
    }
  }


  return (
    <>
      <section className=" flex flex-row ml-16 mt-16 gap-8">
      <form 
        action="post" 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-8 w-md mt-10 ml-10 flex flex-col gap-5">
      <div className="flex flex-col flex-1 gap-1">
        <label htmlFor="firstname" className="text-sm font-semibold text-gray-600">Email</label>
        <input type="text" 
          value={name} 
          onChange={handleChange} 
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
      </div>
      <div className="flex flex-col flex-1 gap-1">
        <label htmlFor="firstname" className="text-sm font-semibold text-gray-600">Password</label>
        <input 
          type="password" 
          value={name} 
          onChange={handleChange} 
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
      </div>

      <button 
        type="submit"
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200 w-full mt-2"
        >Log in</button>
        <Link to="/forgot-password">
          <p className="flex justify-end cursor-pointer">Forgot Password?</p>
        </Link>
      </form>
        <div>
          <h2 className="text-3xl font-bold text-black">Login into user dashboard</h2>
          <p className="text-gray-600 text-lg max-w-md">
            Manage your booking, and booking history on our platform. Enjoy seamless vehicle rental
            service.
          </p>
        </div>
    </section>
    </>
  )
}

export default UserLogin