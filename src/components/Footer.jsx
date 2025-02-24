import { FiPhone } from "react-icons/fi"; 
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="w-full flex flex-col-reverse md:flex-row">
      <div className="w-3/4">
        <div className="flex justify-start pl-38 gap-38 pt-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Pages</h4>
            <ul className="text-gray-600 md:space-y-3 text-sm">
              <li>Home</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-2">Office Hours</h3>
            <div className=" text-gray-600 text-sm"> 
              <p>Monday - Friday</p>
              <p>9AM - 5PM</p>
            </div>
            <div className="text-gray-600">
              <p>Saturday - Sunday</p>
              <p>By Appointment</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 w-[70%] mx-auto mt-6 flex items-center justify-between py-6">

          <div>
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} Elite. All rights reserved.
            </p>
          </div>
          <div className="text-sm text-gray-600 flex items-center gap-8">
            <div className="flex items-center gap-2">
              <img 
                src="src/assets/Union.png" 
                alt="union" 
              />
              <p>Complaints book</p>
            </div>

            <div className="flex gap-6 ">
              <FaFacebookF />
              <FaLinkedinIn />
              <FaInstagram />
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="bg-gray-100 w-full md:w-1/4 flex justify-center items-center">
        <div className="p-6 space-y-6">
          <h4 className="font-semibold">We are here to help you</h4>
          
          <div>
            <h3 className="text-xs text-gray-600">Phone:</h3>
            <div className="flex items-center gap-2">
              <FiPhone className="text-sm"/>
              <p className="text-sm">561 - 302 - 9383</p>
            </div>
          </div>
          <div className="">
            <h3 className="text-xs text-gray-600">Email:</h3>
            <div className="flex items-center gap-2">
              <TfiEmail className="text-sm" />
              <p className="text-sm">info@elitepropmgt.com</p>
            </div>
          </div>
          <div>
            <h3 className="text-xs text-gray-600">Address:</h3>
            <div className="flex items-center gap-2">
              <CiLocationOn className="text-sm" />
              <p className="leading-none text-sm">Poner dirección desde <br /> Front-end</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer