import { useEffect, useRef, useState } from 'react'
import { motion, transform } from 'framer-motion'

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false)
  const [showNav, setShowNav] = useState(true)
  const [navBackground, setNavBackground] = useState(false)

  const lastScrollY = useRef(0)

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  function handleScroll() {
    if (typeof window !== undefined) {
      if (window.scrollY > lastScrollY.current) {
        setShowNav(false)
      } else {
        setShowNav(true)
      }
      lastScrollY.current = window.scrollY
    }

    if (window.scrollY === 0) {
      setNavBackground(false)
    } else {
      setNavBackground(true)
      setOpenMenu(false)
    }
  }

  return (
    <header
      className={` ${
        showNav ? 'top-0' : 'top-[-100px]'
      } fixed left-0 py-8 px-5 sm:px-10 md:px-14 lg:px-20 w-full text-white ${
        navBackground ? 'bg-primary-black/50 backdrop-blur-xs' : ''
      }  z-50 transition-all duration-500`}
    >
      <nav className='uppercase font-bold'>
        <ul className='flex'>
          <li>
            <a className='text-lg lg:text-2xl' href='#'>
              Half Life 2
            </a>
          </li>

          <ul className='hidden xl:flex items-center gap-10 ml-auto font-medium child:after:opacity-0 child:after:w-[1%] child:after:h-[2px] child:after:block child:after:bg-primary-white child-hover:after:w-full child-hover:after:opacity-100 child:after:transition-all child:after:duration-[300ms] child:after:ease-in'>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#characters'>Characters</a>
            </li>
            <li>
              <a href='#reviews'>Reviews</a>
            </li>
            <li>
              <a href='#about_developer'>Developer</a>
            </li>
            <li>
              <a href='#news'>News</a>
            </li>
            <li>
              <a href='#footer'>Contact</a>
            </li>
          </ul>

          <li className='ml-auto hidden xl:flex items-center hover:gap-2 gap-1 cursor-pointer w-10 transition'>
            <div className='w-[6px] h-[6px] bg-primary-white rounded-full'></div>
            <div className='w-[6px] h-[6px] bg-primary-white rounded-full'></div>
            <div className='w-[6px] h-[6px] bg-primary-white rounded-full'></div>
          </li>

          <li className='ml-auto font-medium xl:hidden'>
            <button
              onClick={() => setOpenMenu((prevState) => !prevState)}
              className='uppercase'
            >
              {!openMenu ? 'Menu' : 'Close'}
            </button>
          </li>
          {openMenu ? (
            <motion.ul
              initial={{ y: '-100%', x: '-50%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              className='xl:hidden flex flex-col items-center gap-5 absolute top-[10vh] left-[50%] translate-x-[-50%] w-[80%]  text-primary-white font-medium py-20 rounded-md  bg-primary-black shadow-lg child:after:opacity-0 child:after:w-[1%] child:after:h-[2px] child:after:block child:after:bg-primary-white  child-hover:after:w-full child-hover:after:opacity-100 child:after:transition-all child:after:duration-[300ms] child:after:ease-in'
            >
              <li>
                <a onClick={() => setOpenMenu(false)} href='#about'>
                  About
                </a>
              </li>
              <li>
                <a onClick={() => setOpenMenu(false)} href='#characters'>
                  Characters
                </a>
              </li>
              <li>
                <a onClick={() => setOpenMenu(false)} href='#reviews'>
                  Reviews
                </a>
              </li>
              <li>
                <a onClick={() => setOpenMenu(false)} href='#about_developer'>
                  Developer
                </a>
              </li>
              <li>
                <a onClick={() => setOpenMenu(false)} href='#news'>
                  News
                </a>
              </li>
              <li>
                <a onClick={() => setOpenMenu(false)} href='#footer'>
                  Contact
                </a>
              </li>
            </motion.ul>
          ) : (
            ''
          )}
        </ul>
      </nav>
    </header>
  )
}
