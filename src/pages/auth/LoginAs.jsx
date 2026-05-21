import { useState } from "react"
import AuthCardLogin from "../../components/AuthCard"
import { useNavigate } from "react-router-dom"

const LoginAs = () => {
  const [selected, setSelected] = useState(null)
  const navigate = useNavigate()

  const loginAs = [
    { title: "User", body: "Book your trips and manage and manage your bookings in one place" },
    { title: "Company", body: "Place your vehicle on hire on our platform and earn while they are used" },
    { title: "Admin", body: "Manage users activities effectively" },
  ]


  return (
    <>
      <div className="m-20">
        <h2 className="font-semibold text-2xl text-black ml-2">Login as a</h2>
        {loginAs.map((item) => (
          <AuthCardLogin 
            key={item.title} 
            title={item.title} 
            body={item.body} 
            selected={selected}
            onClick={() => setSelected(item.title)} />
        ))}
        <button className="w-sm mt-2 ml-2 bg-purple-500 hover:bg-amber-500 rounded-lg text-white h-10" 
          onClick={() => navigate(`/${selected}-login`)}>continue</button>
      </div >
    </>

  )
}

export default LoginAs