import { nav } from 'framer-motion/client'
import React from 'react'
import talent from "../assets/ppts/talent.jpg"

const Navbar = () => {

    const navData = [
        {
            id: 1,
            title: "Home",
        },
        {
            id: 2,
            title: "About",
        },
        {
            id: 3,
            title: "Service",
        },
        {
            id: 1,
            title: "Contact",
        },
    ]

    return (
        <div className=' w-11/12 mx-auto border-b  rounded-2xl bg-transparent  h-16 flex justify-between text-white items-center'>
            <div>
                <img src={talent} width={80} height={80} className=' rounded-md flex items-center ml-2 justify-center' />
            </div>

            <div className=' flex gap-x-8'>
                {
                    navData.map((data) => (
                        <div key={data.id} className=''>
                            <ul>
                                <button>{data.title}</button>
                            </ul>
                        </div>
                    ))
                }
            </div>

            <div>

            </div>
        </div>
    )
}

export default Navbar
