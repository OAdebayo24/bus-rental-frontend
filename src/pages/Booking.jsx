import { useBookingStore } from '../store/booking-store'

const Booking = () => {

  const { email, password, reset, setPassword, setEmail } = useBookingStore((state) => {
    email: state.email;
    lastName: state.lastName;
    firstName: state.firstName;
    setPassword: state.setPassword;
    setEmail: state.setEmail
  })

  return (
    <>
    <main>
      <h2>Make a booking</h2>
      <form action="post">
        <section className='flex flex-row'>
          <div>
            <label htmlFor="busType">Bus Type</label>
            <input type="text" />
            <label htmlFor="DOR">Duration of Rentals</label>
            <input type="text" />
            <label htmlFor="fName">First Name</label>
          </div>
          <div>
            <label htmlFor="PhoneNum">Phone Number</label>
            <input type="text"/>
            <label htmlFor="DOR">Email</label>
            <input type="text" />
            <label htmlFor="fName">Last Name</label>
          </div>
        </section>

        <label htmlFor="PickUpAdress">Pick up Address</label>
        <input type="text" />
        <label htmlFor="PickUpAdress">Destination</label>
        <input type="text" />
      </form>
    </main>
    </>
  )
}

export default Booking