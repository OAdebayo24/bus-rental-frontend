import VehicleRentalCard from "../components/VehicleRental"
import vehicle from "../vehicle"



const VehicleRental = () => {
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    {vehicle.map((item) => (
      <VehicleRentalCard 
        key= {item.id}
        id={item.id}
        thumbnail={item.thumbnail}
        type={item.type}
        description={item.description}
        price={item.price}
        amenities={item.amenities}
      />
    ))}
    </div>
    </>
  )
}


export default VehicleRental