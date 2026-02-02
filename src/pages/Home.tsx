import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
const Home = () => {
  return (
   <div className="flex flex-col items-center text-center mt-24 px-4">
  <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
    Welcome to Simple Web
  </h1>

  <p className="mt-6 max-w-2xl text-gray-700 text-lg">
    A beautiful, minimal and elegant website built with React and Tailwind CSS.
    Perfect for learning modern web development.
  </p>

    <Link 
    to="/about"
    
    className="mt-8 px-6 py-3 bg-blue-900 text-white rounded-lg
               hover:bg-blue-800 transition duration-200"
  
    >Learn More
    </Link>

<div className="mt-24 px-4 flex flex-col items-center">
  {/* Section Title */}
  <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
    Key Features
  </h2>

  {/* Features Row */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
    
    {/* Feature 1 */}
    <div className="bg-white p-10 rounded-2xl shadow-md min-h-[260px]
                    flex flex-col justify-center text-center">
      <h3 className="text-2xl font-semibold text-blue-900 mb-4">
        Lightning Fast
      </h3>
      <p className="text-gray-700 leading-relaxed">
        Built with modern technologies to deliver exceptional performance and
        speed for the best user experience.
      </p>
    </div>

    {/* Feature 2 */}
    <div className="bg-white p-10 rounded-2xl shadow-md min-h-[260px]
                    flex flex-col justify-center text-center">
      <h3 className="text-2xl font-semibold text-blue-900 mb-4">
        Secure and Reliable
      </h3>
      <p className="text-gray-700 leading-relaxed">
        Your data and privacy are our top priority. We implement
        industry-standard security practices.
      </p>
    </div>

    {/* Feature 3 */}
    <div className="bg-white p-10 rounded-2xl shadow-md min-h-[260px]
                    flex flex-col justify-center text-center">
      <h3 className="text-2xl font-semibold text-blue-900 mb-4">
        User Friendly
      </h3>
      <p className="text-gray-700 leading-relaxed">
        Designed with simplicity in mind. A clean interface that makes
        navigation intuitive and enjoyable.
      </p>
    </div>

  </div>
</div>


<div className="mt-16 mb-16 w-full flex justify-center">
  {/* Wide CTA Box with blended edges */}
  <div className="w-full max-w-6xl h-56 border border-gray-300 bg-gray-50
                  rounded-3xl flex items-center justify-center shadow-sm">
    
    <div className="text-center px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
        Ready to Get Started?
      </h2>

      <p className="mt-4 text-gray-700 text-lg md:text-xl
                    max-w-5xl mx-auto leading-relaxed">
        Explore our website and discover what makes us different.
      </p>

      <div className="mt-6 flex justify-center">
        <Link
          to="/about"
          className="px-12 py-3 bg-blue-900 text-white text-lg
                     rounded-xl hover:bg-blue-800 transition duration-200"
        >
          About
        </Link>
      </div>
    </div>

  </div>
</div>
</div>
  )
}

export default Home
