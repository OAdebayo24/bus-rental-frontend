import { create } from "zustand";


export const useBookingStore = create((set) => ({
  busType: '',
  email: '',
  firstName: '',
  lastName: '',
  numberOfPassengers: '',
  durationOfRentals: '',
  phoneNumber: '',
  pickUpAddress: '',
  destination: '',
  setBusType: (busType) => set({ busType }),
  setEmail: (email) => set({email}),
  setFirstName: (firstName) => set({firstName}),
  setLastName: (lastName) => set({ lastName }),
  setNumberOfPassengers: (numberOfPassengers) => set({ numberOfPassengers }),
  setDurationOfRentals: (durationOfRentals) => set({ durationOfRentals }),
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
  setPickUpAddress: (pickUpAddress) => set({ pickUpAddress }),
  setDestination: (destination) => set({destination}),
  reset: set({
    busType: '',
    email: '',
    firstName: '',
    lastName: '',
    numberOfPassengers: '',
    durationOfRentals: '',
    phoneNumber: '',
    pickUpAddress: '',
    destination: '',
  })
}))

