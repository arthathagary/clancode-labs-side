import React from 'react'
import Image from 'next/image'
import productDevelopmentImg from '../../../public/assets/images/productDevelopment.jpg'

const ProductDevelpment = () => {
  return (
    <div className='md:flex bg-[#DAF3F4] md:h-[70vh] w-full md:px-32 px-8 py-6 md:py-0 justify-center items-center gap-8'>
    <div className='md:w-[50%]'>
    <h3 className='font-bold md:mb-4'>Product Development</h3>
    <h2>Innovative solutions Solid engineering</h2>
    <p className='pb-6'>We complement your vision of building the right product, by helping you build it the right way</p>
    <button className='text-[#45C0CE]'>Explore More</button>
    </div>
        
    <div className='md:w-[50%]'>
    <Image src={productDevelopmentImg} alt='productDevelopment Image' />
    </div>
    </div>
  )
}

export default ProductDevelpment