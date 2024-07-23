import React from 'react'

function Experiences({ data }) {
    return (
        <div className='py-10'>
            <div className="grid place-items-center my-10">
                <h2 className='text-4xl py-4 px-8 font-semibold moving-border border-4 rounded-xl text-black'>
                    Experience
                </h2>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 gap-x-16 lg:grid-cols-2">
                {
                    data.map((item, index) => (
                        <div className="bg-white dark:bg-slate-900 flex flex-col shadow-md  dark:shadow-[rgba(18,215,250,0.45)] relative rounded-lg" key={index}>
                            <div className="flex justify-between items-center py-4 px-5 flex-wrap">
                                <div className="flex gap-4 items-center">
                                    <img src={item.image} alt="" className='h-16' />
                                    <h2 className='text-xl font-semibold'>
                                        {item.companyName}
                                    </h2>
                                </div>
                                <div className="text-xl">
                                    {item.role}
                                </div>
                            </div>
                            <hr />
                            <div className="px-5 text-gray-500 flex-grow">
                                <ul className='list-disc list-inside'
                                    style={{
                                        paddingLeft: "1.5rem", textIndent: "-1.5rem"
                                    }}
                                >
                                    {
                                        item.work.map((line, index) => (
                                            <li
                                                key={index}
                                                className='py-1 leading-6
                                                tracking-wide'
                                            >
                                                {line}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="py-4 bg-gray-200 dark:bg-gray-800 px-5 mt-4 text-sm">
                                {item.duration}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Experiences
