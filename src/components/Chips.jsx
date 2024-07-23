import React from 'react'

function chips({ techStackName }) {
    return (
        <div className='relative flex items-center gap-2 py-1 px-1 rounded-l-3xl rounded-2xl backdrop-filter bg-clip-padding bg-white backdrop-blur-md bg-opacity-10 border border-gray-100 text-black dark:text-white'>
            <img src="/target.png" alt="target icon" className='absolute h-8 left-0 rounded-full' />
            <p className='ml-8'>{techStackName}</p>
        </div>
    )
}

export default chips