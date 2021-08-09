import React, { useState } from 'react';

const TimeCard = () => {
    let time = new Date().toLocaleTimeString();
    let date = new Date().toLocaleDateString('en-GB');

    const [Ctime, setCtime] = useState(time);
    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }

    setInterval(updateTime, 1000);

    return (
        <div className="group inline-block relative">
            <button
                className="bg-portfolio-2000 text-portfolio-4000  font-semibold py-1 px-1 rounded inline-flex items-center"
            >
                <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                </svg>
            </button>
            <div className="absolute hidden text-portfolio-4000  pl-3 py-3 group-hover:block bg-portfolio-2000  rounded mt-1">
                <h2 className=" font-semibold text-md w-22">{time}</h2>
                <h2 className="font-semibold text-md w-24">{date}</h2>
            </div>
        </div>

    )
}

export default TimeCard
