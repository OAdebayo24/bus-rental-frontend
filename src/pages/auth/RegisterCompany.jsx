import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../services/api"

const RegisterUser = () => {
  const [name, setName] = useState()
  const [userData, setUserData] = useState({
    businessName: "",
    email: "",
    password: ""
  })
  const navigate = useNavigate()



  const handleChange = (e) => {
    const { name, value } = e.target
    setName((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const apiResponse = await api.post("", userData)
    const { token, user } = apiResponse.data

    localStorage.setItem("company registration token", token)
    navigate("/company-login")
  }

  return (
    <>
      <section className=" flex flex-row ml-16 mt-16 gap-8">
        <div>
          <h2 className="text-3xl font-bold text-black">Register your business, and enjoy our service</h2>
          <p className="text-gray-600 text-lg max-w-md">
            Book your vehicles, and manage it's history on our platform. Enjoy seamless vehicle rental
            service.
          </p>
        </div>
        <form onSubmit={handleSubmit} action="post" className="bg-white shadow-md rounded-xl p-8 w-md mt-10 ml-10 flex flex-col gap-5">
          <div className="flex flex-col flex-1 gap-1">
            <label htmlFor="companyname" className="text-sm font-semibold text-gray-600">Company Name</label>
            <input type="text"
              value={name}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" />
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <label htmlFor="firstname" className="text-sm font-semibold text-gray-600">Company Email</label>
            <input
              type="text"
              value={name}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <label htmlFor="firstname" className="text-sm font-semibold text-gray-600">Company Password</label>
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
          >Register</button>

          <button
            type="submit"
            className="bg-white-500 border border-gray-300 text-black font-semibold px-6 py-2 rounded-lg transition-colors duration-200 w-full mt-2"
          >Continue with Google</button>
        </form>
      </section>
    </>
  )
}

export default RegisterUser