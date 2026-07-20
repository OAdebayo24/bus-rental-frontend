import { Link } from "react-router-dom"
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Footer = () => {
  return (
    <>
      <footer className="bg-blue-50 px-4 sm:px-6 md:px-10 py-8 md:py-10 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8 md:gap-10">
          <section className="flex flex-col gap-6">
            <div>
              <h2>Bus Rental Logo</h2>
              <p>Bus Rental Service</p>
              <p>Alimosho, Lagos, Nigeria</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to="https://facebook.com">
                <FontAwesomeIcon icon={faFacebook} className="text-xl sm:text-2xl text-blue-700 bg-white p-2 rounded-full shadow hover:text-blue-900 transition-colors" />
              </Link>
              <Link>
                <FontAwesomeIcon icon={faInstagram} className="text-xl sm:text-2xl text-blue-700 bg-white p-2 rounded-full shadow hover:text-blue-900 transition-colors" />
              </Link>
              <Link>
                <FontAwesomeIcon icon={faTwitter} className="text-xl sm:text-2xl text-blue-700 bg-white p-2 rounded-full shadow hover:text-blue-900 transition-colors" />
                {/* <FontAwesomeIcon icon={byPrefixAndName.fab['x-twitter']} className="text-xl sm:text-2xl text-blue-700 bg-white p-2 rounded-full shadow hover:text-blue-900 transition-colors" /> */}
              </Link>
              <Link>
                <FontAwesomeIcon icon={faLinkedin} className="text-xl sm:text-2xl text-blue-700 bg-white p-2 rounded-full shadow hover:text-blue-900 transition-colors" />
              </Link>

            </div>
          </section>

          <section className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 px-0 md:px-6">
            <div>
              <h5 className="text-base sm:text-lg font-semibold mb-4 border-b border-white/30 inline-block pb-1">Solution</h5>
              <ul className="space-y-2 text-sm sm:text-base">
                <Link to="/vehicle-rental">
                  <li>Vehicle Rental</li>
                </Link>
                <Link>
                  <li>Business Rental</li>
                </Link>
                <Link to="/event">
                  <li>Event</li>
                </Link>
                <Link>
                  <li>Daily</li>
                </Link>
              </ul>
            </div>

            <div>
              <h5 className="text-base sm:text-lg font-semibold mb-4 border-b border-white/30 inline-block pb-1">Policies</h5>
              <ul className="space-y-2 text-sm sm:text-base">
                <Link>
                  <li>Terms of use</li>
                </Link>
                <Link>
                  <li>Behaviour Policy</li>
                </Link>
                <Link>
                  <li>Charter terms</li>
                </Link>
                <Link>
                  <li>Refund Policy</li>
                </Link>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h5 className="text-base sm:text-lg font-semibold mb-4 border-b border-white/30 inline-block pb-1">Resources</h5>
              <ul className="space-y-2 text-sm sm:text-base">
                <Link to="/contact">
                  <li>Contact Us</li>
                </Link>
                <Link>
                  <li>Community</li>
                </Link>
                <Link>
                  <li>FAQs</li>
                </Link>
                <Link>
                  <li>Support</li>
                </Link>
              </ul>
            </div>
          </section>
        </div>

        <section className="text-center text-xs sm:text-sm mt-8 md:mt-10">
          &copy; {new Date().getFullYear()}. All Right Reserved
        </section>
      </footer>
    </>
  )
}

export default Footer