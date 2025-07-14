
export default function Locations(){
    return(
        <div id="locations" className="py-16 bg-gray-50">
            <div className='max-w-4xl mx-auto px-6 text-center'>
                <h2 className="text-4xl font bold text-gray-800 md-10 border-b-4 border-pink-500 inline-block">
                    Our Locations
                </h2>
            <div className='grid md:gridcols-2 gap-8 mt-10 text-left'>
                <div className='p-6 bg-white rounded-2xl shadow hover:shadow-lg transition'>
                    <h3 className="text-2xl font font-semibold text-pink-600 mb-3">Kamurocho</h3>
                    <ul className="list-disc pl-5 text gray-700 space-y-1">
                        <li>Tenkaichi Street</li>
                        <li>West Shichifuku Street</li>
                    </ul>
                </div>

               <div className='p-6 bg-white rounded-2xl shadow hover:shadow-lg transition'>
                <h3 className='text-2xl font-semibold text-pink-600 mb-3'>Sotenbori</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Tsurukame Highway</li>
                    <li>Sotenbori Footpath</li>
                </ul>
                </div> 

            </div>
            </div>
            
        </div>
    )
}