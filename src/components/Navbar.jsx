import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom'
import {styles} from '../style';
import { navLinks } from '../constants'
import { menu,close } from '../assets'
import logo from '/logo.jpg'
const Navbar = () => {

  const[active, setActive]=useState("");
  const[toggle, setToggle] =useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {  //100px se zada scrolled
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
//The empty array [] as the second parameter indicates that this effect should only run once, similar to componentDidMount in class components.
//Since there are no dependencies, the effect runs once after the initial render and the cleanup function runs once when the component is unmounted.

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to='/' className='flex items-center gap-2' onClick={()=>
        {
          setActive("");
          window.scrollTo(0,0);
        }}>
          <img src={logo} alt='logo' className='w-9 h-9 object-contain'/>
          <p className='text-white text-[18px] font-bold cursor-pointer'>Kinjal Gujral &nbsp; <span className='sm:block hidden font-semibold font-[7px]'> | Portfolio </span></p>
        </Link>
        <ul className='p-6 list-none hidden sm:flex flex-row gap-10'>
          {
            navLinks.map((Link) =>(
              <li 
              key={Link.id}
              className={`${active ===Link.title ? "text-white": "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer `} 
              onClick={() =>
              {
                setActive(Link.title)
              }
              }>
                <a href={`#${Link.id}`}>{Link.title}</a>
              </li>
            )
            )

          }
        </ul>
        {/* hamburger */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl `}>
              <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {
                navLinks.map((Link) =>(
                  <li 
                    key={Link.id} 
                    className={`${active ===Link.title ? "text-white": "text-secondary"} font-poppins font-medium cursor-pointer text-[16px] `} 
                    onClick={() =>
                  {
                    setActive(Link.title);
                    setToggle(!toggle)
                  }
                  }>
                    <a href={`#${Link.id}`}>{Link.title}</a>
                  </li>
                )
                )

              }
            </ul>
          </div>

        </div>
      </div>
   
   </nav>
  )
}

export default Navbar;