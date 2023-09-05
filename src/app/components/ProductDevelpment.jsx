'use client';
import React,{useEffect,useRef} from 'react'
import Image from 'next/image'
import productDevelopmentImg from '../../../public/assets/images/productDevelopment.jpg'
import {motion,useInView,useAnimation} from 'framer-motion';

const ProductDevelpment = () => {
  const ref = useRef(null);
  const isView = useInView(ref,{once:true});

  const controlAnimation = useAnimation();

  useEffect(()=>{
    if (isView){
      controlAnimation.start("visible")
    }else{
      controlAnimation.start("hidden")
    }
  },[isView])


  return (
    <div ref={ref} className='md:flex bg-[#DAF3F4] md:h-[70vh] w-full md:px-32 px-8 py-6 md:py-0 justify-center items-center gap-8 mt-[300px] md:mt-[400px] lg:mt-[450px]'>
    <motion.div
    variants={{
      hidden:{x:'-100vw',opacity:0},
      visible:{x:0,opacity:1}
    }}
    initial="hidden"
    animate={controlAnimation}
    transition={{type:'spring',stiffness:30}}
     className='md:w-[50%]'>
    <h3 className='font-bold md:mb-4'>Product Development</h3>
    <h2>Innovative solutions Solid engineering</h2>
    <p className='pb-6'>We complement your vision of building the right product, by helping you build it the right way</p>
    <button className='text-[#45C0CE]'>Explore More</button>
    </motion.div>
        
    <motion.div
    variants={{
      hidden:{x:'100vw',opacity:0},
      visible:{x:0,opacity:1}
    }}
    initial="hidden"
    animate={controlAnimation}
    transition={{type:'spring',stiffness:30}}
     className='md:w-[50%]'>
    <Image src={productDevelopmentImg} alt='productDevelopment Image' />
    </motion.div>
    </div>
  )
}

export default ProductDevelpment