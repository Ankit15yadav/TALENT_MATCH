import React from 'react'
// import img1 from "../assets/ppts/vercel copy.svg"

const SlideView = ({ img }) => {
    return (
        <div className=' w-11/12 mx-auto'>
            <img src={img} alt='ppts'
                className=' object-fit w-full rounded-2xl shadow-lg mb-5 mt-5'
            />
        </div>
    )
}

export default SlideView
