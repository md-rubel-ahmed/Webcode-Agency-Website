import React from 'react'
import HeadingSection from '../../components/HeadingSection'
const Testimonials = () => {
  return (
    <div className='bg-colorBg'>
      <div className='max-w-screen-2xl mx-auto py-20 px-5'>
          <HeadingSection heading="What Our Clients Say" subheading="Testimonials" description=""/>

{/* testimonial carousel  */}

<div>
    
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item  md:space-x-8 relative w-full ">
   <div className="w-full flex justify-center" >

     <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>
      <img
      src="/images/logos/logo2.png"
      className="size-28 mx-auto my-2 object-contain" />
      <p className='text-gray-600 italic mb-4 md:w-2/4 mx-auto '>Their creativity and professionalism exceeded our expectations. The website design is beautiful, user-friendly, and helped our company attract more online customers.</p>
      <div className='flex flex-col items-center space-y-2'>
        <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold'>J</div>
        <h3 className='text-lg font-bold text-gray-800'>Jane Smith</h3>
        <p className='text-sm text-gray-500'>Marketing Lead, BizSolutions</p>
      </div>
    </div>


   </div>

    <div>
  <div className="w-full flex justify-center" >

     <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>
      <img
      src="/images/logos/logo1.png"
      className="size-28 mx-auto my-2 object-contain" />
      <p className='text-gray-600 italic mb-4 md:w-2/4 mx-auto '>Working with this team was amazing. They built our website perfectly, improved performance, and delivered a modern design that truly represents our brand.</p>
      <div className='flex flex-col items-center space-y-2'>
        <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold'>J</div>
        <h3 className='text-lg font-bold text-gray-800'>John Doe</h3>
        <p className='text-sm text-gray-500'>CEO, TechCorp</p>
      </div>
    </div>


   </div>

    </div>

    {/* <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-full" /> */}
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item md:space-x-8 relative w-full">
    <div className="w-full flex justify-center" >

     <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>
      <img
      src="/images/logos/logo2.png"
      className="size-28 mx-auto my-2 object-contain" />
      <p className='text-gray-600 italic mb-4 md:w-2/4 mx-auto '>The team delivered a seamless experience. Our project was completed on time, with excellent design, responsive support, and solutions that truly fit our business needs.</p>
      <div className='flex flex-col items-center space-y-2'>
        <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold'>M</div>
        <h3 className='text-lg font-bold text-gray-800'>Mark Wilson</h3>
        <p className='text-sm text-gray-500'>CTO, Zoomerr</p>
      </div>
    </div>


   </div>

    <div>
  <div className="w-full flex justify-center" >

     <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>
      <img
      src="/images/logos/logo1.png"
      className="size-28 mx-auto my-2 object-contain" />
      <p className='text-gray-600 italic mb-4 md:w-2/4 mx-auto '>I am impressed with their professionalism and attention to detail. Our website now attracts more visitors, performs better, and looks visually stunning.</p>
      <div className='flex flex-col items-center space-y-2'>
        <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold'>E</div>
        <h3 className='text-lg font-bold text-gray-800'>Emily Davis</h3>
        <p className='text-sm text-gray-500'>Art Director, ArtVenue</p>
      </div>
    </div>


   </div>

    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item md:space-x-8 relative w-full">
     <div className="w-full flex justify-center" >

     <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>
      <img
      src="/images/logos/logo2.png"
      className="size-28 mx-auto my-2 object-contain" />
      <p className='text-gray-600 italic mb-4 md:w-2/4 mx-auto '>Their team transformed our website completely. The new design is elegant, fast, and user-friendly, helping us engage more clients and grow our online presence.</p>
      <div className='flex flex-col items-center space-y-2'>
        <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold'>S</div>
        <h3 className='text-lg font-bold text-gray-800'>Sarah Lee</h3>
        <p className='text-sm text-gray-500'>Founder, Creatix Studio</p>
      </div>
    </div>


   </div>

    <div>
  <div className="w-full flex justify-center" >

     <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>
      <img
      src="/images/logos/logo1.png"
      className="size-28 mx-auto my-2 object-contain" />
      <p className='text-gray-600 italic mb-4 md:w-2/4 mx-auto '>Amazing service! From concept to launch, they handled everything professionally. Our website now perfectly reflects our brand identity and attracts more potential customers.</p>
      <div className='flex flex-col items-center space-y-2'>
        <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold'>D</div>
        <h3 className='text-lg font-bold text-gray-800'>David Kim</h3>
        <p className='text-sm text-gray-500'>Marketing Director, NexaTech</p>
      </div>
    </div>


   </div>

    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item md:space-x-8 relative w-full">
       <div className="w-full flex justify-center" >

     <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>
      <img
      src="/images/logos/logo2.png"
      className="size-28 mx-auto my-2 object-contain" />
      <p className='text-gray-600 italic mb-4 md:w-2/4 mx-auto '>The team’s expertise made our website project smooth and successful. Their designs are modern, functional, and perfectly aligned with our brand vision.</p>
      <div className='flex flex-col items-center space-y-2'>
        <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold'>L</div>
        <h3 className='text-lg font-bold text-gray-800'>Laura Martinez</h3>
        <p className='text-sm text-gray-500'>Product Manager, Innovatech</p>
      </div>
    </div>


   </div>

    <div>
  <div className="w-full flex justify-center" >

     <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>
      <img
      src="/images/logos/logo1.png"
      className="size-28 mx-auto my-2 object-contain" />
      <p className='text-gray-600 italic mb-4 md:w-2/4 mx-auto '>Exceptional creativity and support! They built a website that not only looks great but also performs excellently, improving our customer engagement significantly.</p>
      <div className='flex flex-col items-center space-y-2'>
        <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold'>J</div>
        <h3 className='text-lg font-bold text-gray-800'>James Brown</h3>
        <p className='text-sm text-gray-500'>CEO, BrightSolutions</p>
      </div>
    </div>


   </div>

    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

</div>
      </div>
    </div>
  )
}

export default Testimonials
