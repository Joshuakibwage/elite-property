import { NavLink } from 'react-router-dom'
import logo from '../assets/Logo.svg' 
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from 'react';


const navItems = [
  {
    path: '/',
    Link: 'Home'
  },
  {
    path: '/community',
    Link: 'Find My Community'
  },
  {
    path: '/rental',
    Link: 'Rental Property Services'
  },
  {
    path: '/services',
    Link: 'HOA & Condo Services'
  },
  {
    path: '/faq',
    Link: 'FAQ'
  },
  {
    path: '/about',
    Link: 'About'
  },
  {
    path: '/contact',
    Link: 'Contact'
  },
]


const Navbar = () => {

  const [nav, setNav] = useState(false)
  const toggleNav = () => {
    setNav(!nav)
  }
  return (
    <header className='fixed z-4 w-full'>
        <nav className="flex items-center justify-between px-12 py-2">
          <div>
            <img 
              src={logo} 
              alt="logo" 
              className='w-32 h-13'
            />
          </div>

          <ul className='space-x-8 hidden md:flex'>
            {navItems.map((item, index) => (
              <li key={index} className='text-white uppercase md:text-sm hover:text-gray-300'>
                <NavLink 
                   
                  to={item.path}
                  className={({isActive, isPending}) => (
                       isActive
                       ? "active"
                       : isPending
                       ? "pending"
                       : ""
                  )}
                
              >
                {item.Link}
              </NavLink>
              </li>
            ))}
          </ul>
          {/* mobile menu open and close */}
          <button className='md:hidden flex text-white cursor-pointer' onClick={toggleNav}>
            {nav ? <MdClose size={34}/>  : <GiHamburgerMenu size={34}/>}
          </button>
        </nav>
    </header>
  )
}

export default Navbar