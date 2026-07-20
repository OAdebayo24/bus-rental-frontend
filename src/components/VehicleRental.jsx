import { useNavigate } from "react-router-dom"

const VehicleRentalCard = ({ id, thumbnail, type, price, description, amenities }) => {
  const navigate = useNavigate()

  return (
    <>
      <div className="bg-white rounded-lg shadow p-4">
        <img src={thumbnail} alt="vehicle image" className="w-full h-40 object-cover rounded-md"/>
        <h2 className="text-lg font-semibold mt-3">{type}</h2>
        <p className="text-sm text-gray-600 mt-3">{description}</p>
        {/* <ul>
          {amenities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul> */}
        <div className="flex items-center justify-between mt-4">
          <button 
            className="bg-black text-white text-sm px-4 py-2 rounded-md"
            onClick={() => navigate(`/vehicle-details/${id}`)}>continue</button>
          <p className="font-medium">{price}</p>
        </div>
      </div>
    </>
  )
}

export default VehicleRentalCard