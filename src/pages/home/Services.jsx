import React from 'react'
import HeadingSection from '../../components/HeadingSection'

import { FaLaptopCode, FaSearchPlus, FaPaintBrush, FaShieldAlt } from "react-icons/fa";

const services = [

    {
        icon: FaLaptopCode,

        description: "We create responsive and high-performance websites that engage users and boost your business growth effectively."
    },
    {
        icon: FaPaintBrush,

        description: "Our designs are visually appealing, modern, and user-friendly, giving your brand a professional and attractive online presence."
    },
    {
        icon: FaSearchPlus,

        description: "We optimize your website and marketing strategies to increase visibility, traffic, and engagement for your business."
    },
    {
        icon: FaShieldAlt,

        description: "We implement advanced security measures to protect your website, data, and users, ensuring safe and reliable online operations."
    },


]

const Services = () => {
    return (
        <div className='max-w-screen-2xl container bg-white bg-auto py-28 px-5'>
            <HeadingSection heading="Explore Our Range of Professional Services Tailored to Meet Your Business Needs" subheading="Services" description="We provide a wide range of services designed to help businesses succeed online. From web development and design to marketing solutions, we ensure quality and creativity in every project." />


            {/* servvices container */}

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 md:w-4/5 mx-auto mb-16 '>
                {
                    services.map((service, index) => (
                        <div key={index} className='flex flex-col items-center text-center p-6 hover:shadow-xl hover:rounded-md transition cursor-pointer'>
                            <service.icon className='text-blue-600 text-4xl mb-4' />
                            <p className='text-gray-600 mt-2 md:px-18'>{service.description}</p>
                        </div>
                    ))
                }
            </div>

            {/* button  */}
            <div className='text-center'>
                <button className='bg-blue-600 text-white px-8 py-3 rounded-md  hover:bg-blue-700 transition '>
                    Explore More
                </button>
            </div>

        </div>
    )
}

export default Services
