import { useBookingStore } from '../store/booking-store'

const Booking = () => {

  const { 
    busType,
    email, 
    firstName, 
    lastName, 
    numberOfPassengers, 
    durationOfRentals, 
    phoneNumber, 
    pickUpAddress, 
    destination,
    setBusType,
    setEmail,
    setFirstName,
    setLastName,
    setNumberOfPassengers,
    setDurationOfRentals,
    setPhoneNumber,
    setPickUpAddress,
    setDestination,
    reset,
  } = useBookingStore((state) => ({ 
    busType: state?.busType,
    email: state?.email,
    lastName: state?.lastName,
    firstName: state?.firstName,
    numberOfPassengers: state?.numberOfPassengers,
    durationOfRentals: state?.durationOfRentals,
    phoneNumber: state?.phoneNumber,
    pickUpAddress: state?.pickUpAddress,
    destination: state?.destination,
}))

  const handleSubmit = (e) => {
    e.preventDefault()
    reset()
  }

  return (
    <>
    <main>
      <h2>Make a booking</h2>
      <form onSubmit={handleSubmit} action="post">
        <section className='flex flex-row'>
          <div>
            <label htmlFor="vehicle">Bus Type</label>
            <select 
              name="vehicle"
              id="vehicle"
              type="text"
              value={busType}
              onChange={(e) => setBusType(e.target.value)} 
              >
                <option value="">Luxury Bus</option>
                <option value="">Coaster</option>
                <option value="">Toyota Bus</option>
                <option value="">Jet Moover</option>
            </select>
            <label htmlFor="DOR">Duration of Rentals</label>
            <input 
              type="text" 
              value={durationOfRentals}
              onChange={(e) => setDurationOfRentals(e.target.value)}
              />
            <label htmlFor="fName">First Name</label>
          </div>
          <div>
            <label htmlFor="PhoneNum">Phone Number</label>
            <input type="text"/>
            <label htmlFor="DOR">Email</label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            <label htmlFor="fName">Last Name</label>
          </div>
        </section>

        {/* <label htmlFor="PickUpAdress">Pick up Address</label>
        <input type="text" />
        <label htmlFor="PickUpAdress">Destination</label>
        <input type="text" /> */}
      </form>
    </main>
    </>
  )
}

export default Booking