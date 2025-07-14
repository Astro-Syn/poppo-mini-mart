import Link from "next/link";
import "./Navbar.css";


export const Navbar = () => {
    return (
        <>
        <nav className="navbar">
            
                <div className="logo">
                    <img src="Images/poppo_logo.jpg" alt="poppo logo"></img>
                    
                </div>
            
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
        </>
    )
}