import React from 'react'
import erroricon from "../assets/rocket-icon.png"
import { Link } from "react-router-dom";

const ErrorPage = ({message="Page Not Found", code= 404}) => {
  return (
    <div className='flex flex-col items-center justify-center text-center min-h-screen space-y-5'>
     <img src={erroricon} alt="rocket icon" />
     <h1 className='text-4xl font-bold to-gray-700'>{message}</h1>
     <p className='text-[#21272A] md:w-2/5 w-full mx-auto'>Sorry, the page you are looking for does not exist or may have been moved. Please return to the homepage.</p>
     <Link to="/" className='mt-6 px-6 py-3 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition'>Go to Home Page</Link>
    </div>
  )
}

export default ErrorPage
