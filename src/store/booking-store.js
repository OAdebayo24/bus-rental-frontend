import { create } from "zustand";


export const useBookingStore = create((set) => {
  email: '';
  firstName: '';
  lastName: '';
  numberOfPassengers: '';
  durationOfRentals: '';
  phoneNumber: '';
  pickUpAddress: '';
  destination: '';
})

