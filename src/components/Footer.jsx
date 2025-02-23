import { FiPhone } from "react-icons/fi"; 
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";


const Footer = () => {
  return (
    <footer className="w-full flex flex-col-reverse md:flex-row">
      <div className="w-3/4">
        <div className="flex justify-start pl-38 gap-38 py-16">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Pages</h4>
            <ul className="text-gray-600 md:space-y-3">
              <li>Home</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-2">Office Hours</h3>
            <div className=" text-gray-600"> 
              <p>Monday - Friday</p>
              <p>9AM - 5PM</p>
            </div>
            <div className="text-gray-600">
              <p>Saturday - Sunday</p>
              <p>By Appointment</p>
            </div>
          </div>
        </div>
        <div>

        </div>
      </div>
      <div className="bg-[#D3D7E5] w-full md:w-1/4 flex justify-center items-center">
        <div className="p-6 space-y-6">
          <h4 className="font-semibold">We are here to help you</h4>
          
          <div>
            <h3 className="text-xs">Phone:</h3>
            <div className="flex items-center gap-2">
              <FiPhone className="text-sm"/>
              <p className="text-xs">561 - 302 - 9383</p>
            </div>
          </div>
          <div className="">
            <h3 className="text-xs">Email:</h3>
            <div className="flex items-center gap-2">
              <TfiEmail className="text-sm" />
              <p className="text-xs">info@elitepropmgt.com</p>
            </div>
          </div>
          <div>
            <h3 className="text-xs">Address:</h3>
            <div className="flex items-center gap-2">
              <CiLocationOn className="text-sm" />
              <p className="leading-none text-xs">Poner dirección desde <br /> Front-end</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer