import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AnimatedText = () => {
    const [visible, setVisible] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Set a timer to hide the text after 6 seconds
        const hideTimer = setTimeout(() => {
            setVisible(false);
        }, 5000); // Duration for visibility

        return () => clearTimeout(hideTimer); // Cleanup on unmount
    }, []);

    useEffect(() => {
        if (!visible) {
            // Navigate to the Home page after the exit animation completes
            const navigateTimer = setTimeout(() => {
                navigate('/home');
            }, 4000); // Duration of the exit animation

            return () => clearTimeout(navigateTimer); // Cleanup on unmount
        }
    }, [visible, navigate]);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh', // Full viewport height
                overflow: 'hidden', // Ensure content doesn't overflow during animation
                backgroundColor: '#000' // Optional: Set a background color for contrast
            }}
        >
            <AnimatePresence>
                {visible && (
                    <motion.div
                        initial={{ scale: 0.5, opacity: 1 }} // Start scaled down
                        animate={{ scale: 2.5, opacity: 1 }} // Scale up to cover full screen
                        exit={{ scale: 3, opacity: 0 }} // Scale remains but fades out
                        transition={{ duration: 4, ease: "easeOut" }} // Animation duration
                        style={{
                            fontSize: '3rem', // Adjust font size for larger text
                            background: 'linear-gradient(to right,#4B0082,#ADD8E6, #4B0082)', // Gradient background
                            WebkitBackgroundClip: 'text', // Clip the gradient to text
                            backgroundClip: 'text', // Ensure gradient clips to text
                            color: 'transparent', // Make text color transparent
                            zIndex: 40,
                        }}
                        className='relative'
                    >
                        WELCOME TO BOT DOCTOR
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AnimatedText;
