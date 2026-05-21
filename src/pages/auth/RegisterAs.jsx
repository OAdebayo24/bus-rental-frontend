import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AuthCardRegister from "../../components/AuthCardRegister"


const RegisterAs = () => {
  const [selected, setSelected] = useState(null)
  const navigate = useNavigate()

  const registerAs = [
    { title: "User", body: "Book your trips and manage and manage your bookings in one place" },
    { title: "Company", body: "Place your vehicle on hire on our platform and earn while they are used" },
    { title: "Admin", body: "Manage users activities effectively" },
  ]


  return (
    <>
      <div className="m-20">
        <h2 className="font-semibold text-2xl text-black ml-2">Register as a</h2>
        {registerAs.map((item) => (
          <AuthCardRegister 
            key={item.title} 
            title={item.title} 
            body={item.body} 
            selected={selected} 
            onClick={() => setSelected(item.title)} />
        ))}
        <button 
          className="w-sm mt-2 ml-2 bg-purple-500 hover:bg-indigo-300 rounded-lg text-white h-10" onClick={() => navigate(`/${selected}-register`)}>continue</button>
      </div >
    </>

  )
}

export default RegisterAs