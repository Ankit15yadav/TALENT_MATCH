// StarField.js
import React from 'react';

const StarField = () => {
    // Generate an array to represent the stars
    const stars = Array.from({ length: 100 });

    return (
        <div className="relative min-h-screen  overflow-hidden">
            {stars.map((_, index) => (
                <div
                    key={index}
                    className="star absolute bg-white rounded-full opacity-0"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: '4px',
                        height: '4px',
                        boxShadow: '0 0 6px rgba(255, 255, 255, 0.7)',
                        animation: `twinkling ${Math.random() * 10 + 5}s linear infinite`,
                        animationDelay: `${Math.random() * 10}s`,
                    }}
                />
            ))}


            {/* Add the custom keyframes for star animation */}
            <style>{`
        @keyframes twinkling {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(-100vw, 100vh) scale(0);
            opacity: 0;
          }
        }
      `}</style>
        </div>
    );
};

export default StarField;
