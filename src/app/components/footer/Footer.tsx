import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import '../footer/footer.css';

export const Footer = () => {
    return (
        <div className='footer w-full h-20 bg-pink-500 text-pink-50'>
            <div className='flex justify-between items-center h-full px-8'>
                <div className='flex w-full justify-center'>
                    <Link href='https://github.com/Astro-Syn'>
                    <FaGithub className='w-10 h-10 cursor-pointer' />
                    </Link>
                    
                </div>
                
            <p className='author absolute right-8 text-lg'>Site made by Kelsey Balajti</p>
            </div>
            
            
        </div>
    )
}