import { useState } from "react"
import ImageSlider from "../components/ImageSlider"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import longbus from "../../src/images/longbus.png"
import coaster from "../../src/images/coaster.png"
import toyotaHiace from "../../src/images/toyotaHiace.png"
import urbanBus from "../../src/images/urbanBus.png"
import bus4 from "../../src/images/bus4.png"
import { Link } from "react-router-dom"



const Home = () => {
  const [name, setName] = useState()
  const [activeTab, setActiveTab] = useState("tab1")

  const slides = [
    { url: coaster, title: "coaster" },
    { url: toyotaHiace, title: "hiace" },
    { url: urbanBus, title: "urbanBus" },
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
          className="bg-white rounded-xl shadow-md p-4 sm:p-6 flex flex-col md:flex-row gap-3 sm:gap-4 items-stretch md:items-end"
        >
          <div className="flex flex-col gap-1 flex-1 min-w-0">
            <label htmlFor="location">Pick up location</label>
            <input
              type="text"
              name="location"
              value={name}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
            />
          </div>

          <div className="flex flex-col gap-1 flex-1 min-w-0">
            <label htmlFor="destination">Destination</label>
            <input
              type="text"
              name="destination"
              value={name}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
            />
          </div>

          <div className="flex flex-col gap-1 flex-1 min-w-0">
            <label htmlFor="first-trip">First Trip</label>
            <input
              type="date"
              value={name}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200 whitespace-nowrap cursor-pointer w-full md:w-auto"
          >
            search button
          </button>
        </form>
      ),
      tab2: (
        <form
          aria-label="return-trip"
          method="post"
          className="bg-white rounded-xl shadow-md p-4 sm:p-6 flex flex-col md:flex-row gap-3 sm:gap-4 items-stretch md:items-end"
        >
          <div className="flex flex-col gap-1 flex-1 min-w-0">
            <label htmlFor="location">Pick up location</label>
            <input
              type="text"
              name="location"
              value={name}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
            />
          </div>

          <div className="flex flex-col gap-1 flex-1 min-w-0">
            <label htmlFor="destination">Destination</label>
            <input
              type="text"
              name="destination"
              value={name}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
            />
          </div>

          <div className="flex flex-col gap-1 flex-1 min-w-0">
            <label htmlFor="first-trip">First Trip</label>
            <input
              type="date"
              value={name}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer w-full"
            />
          </div>

          <div className="flex flex-col gap-1 flex-1 min-w-0">
            <label htmlFor="return-trip">Return Trip</label>
            <input
              type="date"
              value={name}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200 whitespace-nowrap cursor-pointer w-full md:w-auto"
          >
            search
          </button>
        </form>
      )
    }

    return (
      <>
        <main className="min-h-screen overflow-x-hidden">
          <NavBar />

          <section className="relative w-full h-[45vh] sm:h-[55vh] md:h-[70vh] lg:h-[85vh] max-w-6xl mx-auto px-2 sm:px-4 pt-4 sm:pt-6">
            <ImageSlider slides={slides} />
          </section>

          <div className="p-3 sm:p-6 lg:p-8 mx-2 sm:mx-4 lg:mx-10 bg-white space-y-4 sm:space-y-5">
            <div className="flex gap-1 p-1 rounded-lg overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`min-w-fit px-3 sm:px-4 py-2 text-sm sm:text-base font-semibold rounded-md whitespace-nowrap ${activeTab === tab.id ? "bg-white text-purple-600" : "text-gray-500 hover:bg-gray-200"
                    }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <section className="w-full">
              {tabContents[activeTab]}
            </section>
          </div>

          <section className="text-center p-4 sm:p-6 md:p-10 max-w-3xl mx-auto">
            <h4 className="font-semibold text-sm sm:text-base">Our service</h4>
            <h2 className="font-extrabold text-xl sm:text-2xl md:text-3xl mt-1">
              We offer solutions for transportation-related issues.
            </h2>
            <p className="text-sm sm:text-base mt-2">
              Learn about the unmatched advantages of our services and enhance your trip with us right now!
            </p>
          </section>

          <section className="p-2 sm:p-4 my-0 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 max-w-full lg:max-w-6xl">
            <section className="shadow-md rounded-xl text-center bg-white p-4 flex flex-col">
              <Link to="/vehicle-rental" className="cursor-pointer flex flex-col h-full">
                <div className="w-full sm:aspect-4/3 overflow-hidden rounded-lg">
                  <img
                    src={longbus}
                    className="w-full h-full object-cover"
                    alt="vehicle-rental-image"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 mb-2 sm:mb-4 border-b border-white/30 inline-block pb-1 self-center">
                  Vehicle rental
                </h3>
                <p className="text-sm sm:text-base">
                  Use our vehicle rental service to unlock the freedom to travel anywhere, at any time. Explore the world on your terms and find a variety of solutions to meet your travel preferences.
                </p>
              </Link>
            </section>

            <section className="shadow-md rounded-xl text-center bg-white p-4 flex flex-col">
              <Link to="/vehicle-rental" className="cursor-pointer flex flex-col h-full">
                <div className="w-full aspect-4/3 overflow-hidden rounded-lg">
                  <img
                    src={bus4}
                    className="w-full h-full object-cover"
                    alt="business-rental-image"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 mb-2 sm:mb-4 border-b border-white/30 inline-block pb-1 self-center">
                  Business rental
                </h3>
                <p className="text-sm sm:text-base">
                  Discover the effectiveness and ease of Organized Mass Transportation, your trustworthy option for smooth, timely, and environmentally responsible transportation.
                </p>
              </Link>
            </section>
          </section>
        </main>
        <Footer />
      </>
    )
}

export default Home