import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
      <div className="flex justify-center items-center h-screen">
      <div className="container max-w-sm bg-white pt-4 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
          <h5 className="mb-1 mt-4 text-xl font-medium text-gray-900 dark:text-white">Cash Bash</h5>
          
          <div className="flex mt-4 space-x-3 lg:mt-6">
              <NavLink to='/login'  className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</NavLink>
              <NavLink to='/register' className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Register</NavLink>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Home
{/* <NavLink to='/login' >Login</NavLink>
<br/>
<NavLink to='/register' >Register</NavLink> */}