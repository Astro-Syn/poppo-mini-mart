'use client'
import Link from "next/link";
import "./Navbar.css";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';


export const Navbar = () => {

        const [openMenu, setopenMenu] = useState(false);

    return (
        <>
        <nav className="navbar hidden md:flex ">
            
            
            <Link href='/' className='logo'>
                <div className="logo">
                    <img src="Images/poppo_logo.jpg" alt="poppo logo"></img>
                </div>
            </Link>
                
            
            <div className='navbar-pattern'>
                <div className="block">
                    <div className='pink'></div>
                    <div className='yellow'></div>
                </div>
                <div className="block">
                    <div className='pink'></div>
                    <div className='yellow'></div>
                </div>
                <div className="block">
                    <div className='pink'></div>
                    <div className='yellow'></div>
                </div>
                <div className="block">
                    <div className='pink'></div>
                    <div className='yellow'></div>
                </div>
                <div className="block">
                    <div className='pink'></div>
                    <div className='yellow'></div>
                </div>
                <div className="block">
                    <div className='pink'></div>
                    <div className='yellow'></div>
                </div>
                <div className="block">
                    <div className='pink'></div>
                    <div className='yellow'></div>
                </div>
            </div>
        </nav>
        <nav className="menu">
            <div className='menu-spacer'></div>
            {/*Dropdown Content */}
        <div className='menu-text'>
            <div className='menu-item dropdown'>
                <Link href='/' className="menu-item">Home</Link>
                <div className='dropdown-content'>
                    <a href='#about'>About Us</a>
                    <a href='#locations'>Our Locations</a>
                </div>
            </div>


            
            <Link href='/food' className="menu-item">Food</Link>
            <Link href='/drinks' className="menu-item">Drinks</Link>
            <Link href='/healing' className="menu-item">Stimulants</Link>
            <Link href='/reviews' className="menu-item">Reviews</Link>
        </div>
            
            
           
                <Link href='/checkout' className="cart">
                
                <img src='/Images/shopping_cart.png' alt="Checkout"></img>
                <div className='orbit-wrapper'>
                    <div className='circle'></div>
                </div>
                </Link>
                
                
        </nav>
                    {/*Hamburger menu */}
            <nav className='ham-nav h-10 bg-pink-600 w-full'>
                
                <button
                className='md:hidden text-2xl'
                onClick={() => setopenMenu(!openMenu)}
                >
                {openMenu ? <FaTimes className='text-cyan-100 text-4xl cursor-pointer'/> : <FaBars className='text-cyan-100 cursor-pointer text-4xl' />}
                </button>

                {openMenu && (
                    <div className="nav-dropdown absolute w-1/4 h-2/3 bg-pink-600 z-10 rounded-br-3xl">
                        <ul>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/food' onClick={() => setopenMenu(false)}>Food</Link></li>
                        <li><Link href='/drinks' onClick={() => setopenMenu(false)}>Drinks</Link></li>
                        <li><Link href='/healing' onClick={() => setopenMenu(false)}>Stimulants</Link></li>
                        <li><Link href='/reviews' onClick={() => setopenMenu(false)}>Reviews</Link></li>
                    </ul>
                    </div>
                    
                )}
            </nav>
                

        </>
    )
}