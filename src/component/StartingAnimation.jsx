import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import img from "../assets/ppts/csiimg.png"

const AnimatedText = () => {
    const [visible, setVisible] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Hide the text after 5 seconds
        const hideTimer = setTimeout(() => {
            setVisible(false);
        }, 5000);

        return () => clearTimeout(hideTimer); // Cleanup on unmount
    }, []);

    useEffect(() => {
        if (!visible) {
            // Navigate to the home page after the exit animation
            const navigateTimer = setTimeout(() => {
                navigate('/home');
            }, 4000);

            return () => clearTimeout(navigateTimer); // Cleanup on unmount
        }
    }, [visible, navigate]);

    return (
        <div
            className="flex justify-center items-center min-h-screen bg-black"
            style={{ overflow: 'hidden' }}
        >

            <AnimatePresence>
                {visible && (
                    <motion.div
                        initial={{ scale: 0.5, opacity: 1 }}
                        animate={{ scale: 2.5, opacity: 1 }}
                        exit={{ scale: 3, opacity: 0 }}
                        transition={{ duration: 4, ease: "easeOut" }}
                        className='text-center relative'
                        style={{
                            fontSize: 'clamp(2rem, 5vw, 6rem)', // Responsive font size
                            background: 'linear-gradient(to right,#4B0082,#ADD8E6, #4B0082)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                            zIndex: 40,
                        }}
                    >
                        WELCOME TO TALENT MATCH
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AnimatedText;
