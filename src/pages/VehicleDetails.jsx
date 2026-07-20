import { useParams } from "react-router-dom"
import vehicle from "../vehicle"


const VehicleDetails = () => {
  const { id } = useParams()
  const selectedVehicle = vehicle.find((item) = item.id === Number(id))

  if(!selectedVehicle) {
    return (
      <>
      <p>Vehicle not Found!</p>
      </>
    )
  }

  const { thumbnail, type, price, description, amenities } = selectedVehicle

  return (
    <>
    <main>
      <h1>{type}</h1>
      <img src={thumbnail} alt="vehicle image" />
      <p>{description}</p>
      <p>{price}</p>

      <ul>
        {amenities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button>Book now</button>
    </main>
    </>
  )
}

export default VehicleDetails