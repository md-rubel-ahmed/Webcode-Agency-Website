import React from 'react'
import HeadingSection from '../../components/HeadingSection'
import {FiSettings, FiCode, FiSmartphone, FiCloud } from "react-icons/fi";


const ToolSection = () => {

const tools = [
{
  icon:FiSettings,
  title: "Web Development",
  description: "We build modern and responsive websites that help businesses grow and attract more customers online."
},
{
  icon:FiCode,
  title: "Creative Design",
  description: "Our creative designs make your brand stand out with beautiful layouts and user-friendly experiences."
},
{
  icon:FiSmartphone,
  title: "SEO Optimization",
  description: "We optimize websites with the best SEO strategies to improve search rankings and increase traffic."
},
{
  icon:FiCloud,
  title: "Secure System",
  description: "We ensure strong website security to protect your data and keep your online platform safe."
},


]

  return (
    <div className='max-w-screen-2xl container mx-auto py-20 px-5'>
      {/* heading sectoin  */}

    {/* <div className='text-center mb-10'>
      <p className='text-blue-600 font-semibold uppercase'>The tools you need</p>
      <h2 className='text-3xl lg:text-4xl font-bold text-gray-800 mt-12'>All-in-One Solution for Your Project</h2>
    </div> */}
<HeadingSection heading="All-in-One Solution for Your Project" subheading="The tools you need"  />


{/* render tools here  */}

<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16'>
  {
    tools.map((tool, index) => (
      <div key={index} className='flex flex-col items-center text-center p-6 bg-white shadow-lg hover:shadow-xl transition cursor-pointer'>
        <tool.icon className='text-blue-600 text-4xl mb-4'/>
        <h3 className='text-lg font-bold text-gray-800'>{tool.title}</h3>
        <p className='text-gray-600 mt-2'>{tool.description}</p>
      </div>
    ) )
  }
</div>

{/* button  */}
<div className='text-center'>
  <button className='bg-blue-600 text-white px-6 py-3 rounded-md  hover:bg-blue-700 transition '>
             Explore More
          </button>
</div>

    </div>
  )
}

export default ToolSection
