// Card.js
import React from 'react';

const Card = ({ data }) => {
    return (
        <div className="bg-gradient-to-tr from-purple-400  to-blue-400 p-4 rounded-lg shadow-md h-[200px] ">
            <div className=' flex flex-col gap-y-4'>
                <p className="font-bold text-lg flex justify-center">{data.title}</p>
                <p className=" text-gray-200">{data.desc}</p>
            </div>
        </div>
    );
}

export default Card;
