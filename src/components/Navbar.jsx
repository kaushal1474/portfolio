import { useState } from 'react'
import { Link } from 'react-router-dom';

import { styles } from "../styles"
import { navLinks } from "../utils/constants"
import { close, logo, menu } from '../assets';



const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to={"/"} className='flex items-center gap-2'
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Kaushal &nbsp; <span className='hidden sm:block'> Chauhan</span>
          </p>
        </Link>
        <ul className='list-none hidden md:flex flex-row gap-10 items-center'>
          {navLinks.map((link) =>
            <li key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} cursor-pointer font-medium hover:text-white text-[18px]`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          )}
          <a className='green-pink-gradient py-2 px-0.5 rounded font-semibold' href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <span className='bg-primary px-4 py-2 hover:bg-transparent hover:text-primary rounded transition-colors'>Resume</span>
          </a>
        </ul>

        <div className='flex md:hidden flex-1 justify-end items-center'>
          <a className='green-pink-gradient py-1.5 px-0.5 rounded font-semibold' href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <span className='bg-primary px-2.5 py-1.5 hover:bg-transparent hover:text-primary rounded transition-colors'>Resume</span>
          </a>
          <img
            src={!toggle ? menu : close}
            alt={!toggle ? "menu" : "close"}
            className='w-[28px] h-[28px] object-contain cursor-pointer ml-4'
            onClick={() => setToggle((prev) => !prev)}
          />

          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-14 right-0 mx-4 my-2 z-10 rounded-xl min-w-[140px]`}>
            <ul className='list-none flex flex-col justify-end items-start gap-4'>
              {navLinks.map((link) =>
                <li key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins cursor-pointer font-medium text-[16px]`}
                  onClick={() => { setActive(link.title); setToggle(false) }}
                >
                  <a href={`#${link.id}`}>
                    {link.title}
                  </a>
                </li>
              )}
            </ul>
          </div>

        </div>

      </div>
    </nav>
  )
}

export default Navbar