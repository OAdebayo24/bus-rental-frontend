import { useState } from "react"
import ImageSlider from "../components/ImageSlider"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import BusOne from "../assets/images/longbus.png"
import BusTwo from "../assets/images/bus2.png"
import { Link } from "react-router-dom"




const Home = () => {
  const [name, setName] = useState()
  const [activeTab, setActiveTab] = useState("tab1")

  const slides = [
    { url: "/src/assets/images/coaster.png", title: "coaster" },
    { url: "/src/assets/images/toyotaHiace.png", title: "hiace" },
    { url: "/src/assets/images/urban_bus.png", title: "urban bus" },
  ]

  const tabs = [
    {id: "tab1", label: "One way"},
    { id: "tab2", label: "Return trip" },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setName((prev) => ({ ...prev, [name]: value }))
  }

  const tabContents = {
    tab1: (

        <form 
          aria-label="one-way" 
          method="post"
          className="bg-white rounded-xl shadow-md p-6 flex flex-row gap-4 items-end"
          >
          <div className="flex flex-col gap-1 flex-1 min-w-45">
            <label htmlFor="location">Pick up location</label>
            <input 
              type="text" 
              name="location" 
              value={name} 
              onChange={handleChange} 
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
          </div>

          <div className="flex flex-col gap-1 flex-1 min-w-45">
            <label htmlFor="destination">Destination</label>
            <input 
              type="text" 
              name="destination" 
              value={name} 
              onChange={handleChange} 
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
          </div>

          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="first-trip">First Trip</label>
            <input 
              type="date" 
              value={name} 
              onChange={handleChange} 
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer"
              />
          </div>
          <button 
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200 whitespace-nowrap cursor-pointer"
            >
            search button
          </button>
        </form>

    ),
    tab2: (
      <form 
        aria-label="return-trip" 
        method="post"
        className="bg-white rounded-xl shadow-md p-6 flex flex-row gap-4 items-end"
        >
        <div className="flex flex-col gap-1 flex-1 min-w-45">
          <label htmlFor="location">Pick up location</label>
          <input 
            type="text" 
            name="location" 
            value={name} 
            onChange={handleChange} 
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
        </div>

        <div className="flex flex-col min-w-45 gap-1 flex-1">
          <label htmlFor="destination">Destination</label>
          <input 
            type="text" 
            name="destination" 
            value={name} 
            onChange={handleChange} 
            className="border border-b-green-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
        </div>

        <div className="flex flex-col gap-1 flex-1 min-w-45">
          <label htmlFor="first-trip">First Trip</label>
          <input
            type="date"
            value={name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointe"
          />
        </div>

        <div className="flex flex-col gap-1 flex-1 min-w-45">
          <label htmlFor="first-trip">Return Trip</label>
          <input
            type="date"
            value={name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointe"
          />
        </div>
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200 whitespace-nowrap cursor-pointer"
        >
          search
        </button>
      </form>
    )
  }


  return (
    <>
    <main className="min-h-screen">
      <NavBar />
      <section className="relative w-full h-[85vh] max-w-6xl mx-auto px-4 pt-6">
        <ImageSlider slides={slides}/>
      </section>
      <div className="p-8 mx-10 bg-white space-y-5">
          <div className="flex gap-1 p-1 rounded-lg">
          {tabs.map((tab) => (
            <button 
              key={tab.id} 
              className={`min-w-fit px-4 py-2 font-semibold rounded-md ${activeTab === tab.id ? "bg-white text-purple-600" : "text-gray-500 hover:bg-gray-200"}`} 
              onClick={() => setActiveTab(tab.id)}>{tab.label}</button>
          ))}
        </div>

        <section className="w-full">
          {tabContents[activeTab]}
        </section>
      </div>
      <section className="text-center p-10">
        <h4 className="font-semibold">Our service</h4>
        <h2 className="font-extrabold text-3xl">We offer solutions for transportation-related issues.</h2>
          <p>Learn about the unmatched advantages of our services and enhance your trip with us right now!</p>
      </section>

      <section className="p-2 my-0 mx-auto flex justify-between max-w-11/12">
        <section className="flex-1 shadow-md rounded-xl text-center bg-white p-4 m-2">
          <img src={BusOne} className="h-80 w-full" alt="vehicle-rental-image" />
          <Link to="/vehicle-rental">
            <h3 className="text-3xl font-semibold mb-4 border-b border-white/30 inline-block pb-1">Vehicle rental</h3>
          </Link>
          <p>Use our vehicle rental service to unlock the freedom to travel anywhere, at any time. Explore the world on your terms and find a variety of solutions to meet your travel preferences. </p>
        </section>
        <section className="flex-1 shadow-md rounded-xl text-center bg-white p-4 m-2">
          <img src={BusTwo} className="h-80 w-full" alt="business-rental-image" />
          <h3 className="text-3xl font-semibold mb-4 border-b border-white/30 inline-block pb-1">Business rental</h3>
          <p>Discover the effectiveness and ease of Organized Mass Transportation, your trustworthy option for smooth, timely, and environmentally responsible transportation. </p>
        </section>
      </section>
    </main>
    <Footer />
    </>
  )
}

export default Home