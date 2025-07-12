import '../about/about.css';

export default function AboutUs() {
    return(
        <div id='about' className='about-section'> 
            <div className='section1'>
                <h2 className="about-us">About Us     </h2>
                <p>
                    Welcome to Poppo Mini Mart — Japan’s #1 Convenience Destination!

    Nestled in the vibrant heart of Japan, Poppo Mini Mart is your go-to stop for all the essentials — and then some. Whether you’re grabbing a quick bite, picking up mood-boosting drinks, or just browsing our curated selection, we’re here to help you find exactly what you need.

    We’ve proudly served thousands of happy customers — including the legendary Dragon of Dojima himself. So step inside, explore our shelves, and see why Poppo is the mini mart everyone’s talking about.
                </p>
            </div>
            
            <div className="img-container">
                <img className='kiryu' src="/Images/kiryu_thumbsup.jpg"></img>
            </div>
        </div>
    )
}