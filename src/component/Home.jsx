import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaLongArrowAltDown } from 'react-icons/fa';
import SlideView from './SlideView';
// import img from "../assets/ppts/stripelogo.png"
import { ppt } from '../Data/ppts';

const Home = () => {
    // Create a ref for the target component
    const handleScroll = () => {
        const element = document.getElementById('ppt');

        if (element) {
            // Scroll to the element with smooth behavior
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            <section className="h-full w-full pt-64 relative flex items-center justify-center flex-col">
                {/* Background Grid */}
                <div className="absolute bottom-0 left-0 right-0 top-0
                    bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)]
                    bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]">
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: "easeOut", delay: 1 }} // Delay to sync with main text
                    className='text-sm text-gray-400 text-center z-40'
                >
                    "Your AI-Powered Health Companion: Accurate, Reliable, and Always Here to Help."
                </motion.p>

                <motion.div
                    className="bg-gradient-to-r from-primary via-primary-light to-teal-200
                    text-transparent bg-clip-text relative z-50"
                    initial={{ y: "-100vh", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                >
                    <h1 className="text-9xl font-bold text-center">Bot Doctor</h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 2, ease: "easeOut", delay: 2 }} // Delay to sync with main text
                    className='mt-40 flex flex-col items-center justify-center gap-y-4'
                >
                    <p className='text-gray-400 text-lg'>Know more</p>
                    <button
                        onClick={handleScroll}
                        className='bg-transparent border-none cursor-pointer'
                    >
                        <FaLongArrowAltDown className='w-10 h-10 text-white animate-bounce' />
                    </button>
                </motion.div>
                {/* 
                <div id='ppt' className=' mt-52 flex flex-col gap-y-3 '>
                    {
                        ppt?.map((ppts) => (
                            <SlideView key={ppts.id} img={ppts.img} />
                        ))
                    }
                </div> */}
            </section>
        </>
    );
}

export default Home;
