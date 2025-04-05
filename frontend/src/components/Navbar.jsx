import React,{useState} from 'react'
import {assets} from '../assets/assets_frontend/assets'
import { NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate=useNavigate();
    
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img className='w-44 cursor-pointer' src={assets.logo} alt="" />
        <ul className='hidden md:flex item-start gap-5 font-m'>
            <NavLink to='/'>
                <li className='py-1'>HOME</li> 
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to='/Doctors'>
                <li className='py-1'>ALL DOCTORS</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to='/About'>
                <li className='py-1'>ABOUT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to='/Contact'>
                <li className='py-1'>CONTACT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
        </ul>
       
       
        <div className='flex items-center gap-4'>
            
            {
                token
                ? <div></div>
                :<button onClick={()=>navigate('/Login')} className='bg-primary text-white px-8 py-3 rounded-full font font-light hidden md:block '>Create Account</button>
            }


            
        </div>
    </div>
  )
}

export default Navbar