import { useNavigate, useParams } from "react-router-dom"
import vehicle from "../vehicle"
import Footer from "../components/Footer"


const VehicleDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const selectedVehicle = vehicle.find((item) => item.id === Number(id))

  if(!selectedVehicle) {
    return (
      <>
      <main className="flex items-center justify-center min-h-[50vh] px-4">
      <p>Vehicle not Found!</p>
      </main>
      </>
    )
  }

  const { thumbnail, type, price, description, amenities } = selectedVehicle

  return (
    <>
    <main className="max-w-3xl mx-auto px-4 py-6 sm:px-6 sm:py-8">
      <h1 className="text-2xl sm:text-3xl mb-4" >{type}</h1>
      <img src={thumbnail} alt="vehicle image" className="w-full h-auto rounded-md mb-4"/>
      <p className="mb-2">{description}</p>
      <p className="mb-4">{price}</p>

      <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
        {amenities.map((item, index) => (
          <li className="w-20 h-7 text-center bg-amber-200 rounded-md" key={index}>{item}</li>
        ))}
      </ul>
      <button 
        onClick={() => navigate("/bookings")}
        className="bg-green-400 text-white cursor-pointer w-full sm:w-auto px-6 py-2 rounded-md">
        Book now
      </button>
    </main>
    <Footer />
    </>
  )
}

export default VehicleDetails