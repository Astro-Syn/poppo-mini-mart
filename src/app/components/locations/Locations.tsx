import '../locations/locations.css';

export default function Locations(){
    return(
        <div id="locations" className="py-16 bg-blue-200">
            <h2 className="title text-4xl flex justify-center font bold text-gray-800 md-10 bg-gray-50 border-b-4 border-pink-500">
                    Our Locations
                </h2>
                <div className='locations-names  flex row justify-center flex-wrap'>
                    <div className='location-city flex flex-col justify-center items-center border-2 border-pink-500 rounded-2xl bg-blue-50'>
                    <h2 className='city-name text-4xl font-alumni'>
                        Kamurocho
                    </h2>
                    <img className='rounded-2xl' src='Images/location_kamurocho.jpg' width={400}></img>
                    <ul className='text-2xl'>
                        <li>Tenkaichi Street</li>
                        <li>West Shichifuku Street</li>
                    </ul>
                    </div>
                    <div className="location-city flex flex-col border-2 justify-center items-center border-pink-500 rounded-2xl bg-blue-50">
                    <h2 className='city-name text-4xl'>
                        Sotenbori
                    </h2>
                    <img className='rounded-2xl' src='Images/location_sotenbori.jpg' width={400}></img>
                    <ul className='text-2xl'>
                        <li>Tsurukame Highway</li>
                        <li>Sotenbori Footpath</li>
                    </ul>
                    </div>
                </div>

            </div>
            
            
        
    )
}