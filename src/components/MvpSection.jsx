"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import webAppProjectImg from "../../public/assets/images/product1.png";
import { motion, useInView, useAnimation } from "framer-motion";

const MvpSection = () => {
  const ref = useRef(null);
  const isView = useInView(ref,{once:true});

  const controlAnimation = useAnimation();

  useEffect(() => {
    if (isView) {
      controlAnimation.start("visible");
    } else {
      controlAnimation.start("hidden");
    }
  }, [isView]);
  return (
    <div id="mvpsection"
      ref={ref}
      className="md:flex md:h-[70vh] w-full md:px-28 px-8 py-6 md:py-0 md:mt-20 mb-20 mt-10 lg:mt-0 justify-center items-center gap-8"
    >
      <motion.div
        variants={{
          hidden: { x: "-100vw", opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={controlAnimation}
        transition={{ type: "spring", stiffness: 30 }}
        className="md:w-[50%]"
      >
        <Image src={webAppProjectImg} alt="webAppProjectImg" />
      </motion.div>

      <motion.div
        variants={{
          hidden: { x: "100vw", opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={controlAnimation}
        transition={{ type: "spring", stiffness: 30 }}
        className="md:w-[50%]"
      >
        <h3 className="mb-4 text-2xl font-bold">Minimum Value Products</h3>
        <h2 className="font-bold">We bulid lightweight, scalable MVPs</h2>
        <p>
          We help you to Go-To-Market fast, continue to iterate and scale up
          while you grow
        </p>
        {/* <button className="mt-4 text-[#44BFCE]">Explore More</button> */}
      </motion.div>
    </div>
  );
};

export default MvpSection;
