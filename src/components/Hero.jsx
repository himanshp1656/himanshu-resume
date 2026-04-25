import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import Button from './Button'
import data from "../data.json";
import { IoChatboxEllipses, IoDocumentText } from 'react-icons/io5';

function Hero() {
    return (
        <div className=''>
            <div className="flex flex-col justify-center items-center py-10 lg:py-20">
                <div className="flex items-center">
                    <img src="/h-trans.png" className='lg:h-52 md:h-32 h-20' alt="hero-image" />
                    <h1 className='lg:text-[250px] md:text-9xl text-8xl font-[350] leading-[0]'>i</h1>
                    <div className="flex flex-col justify-between p-2 lg:gap-4 h-full">
                        <h1 className=' text-3xl md:text-5xl lg:text-7xl font-bold text-center flex-grow'>I am</h1>
                        <h1 className='text-3xl md:text-5xl lg:text-8xl font-semibold md:-mb-6 leading-none -ml-2 md:-ml-4'>manshu <span className='hidden md:inline'>Pandey</span></h1>
                    </div>
                </div>
                <div className='py-4 flex flex-col items-center'>
                    <h3 className='blue-text text-2xl md:text-4xl font-bold'>A full stack developer</h3>

                    <div className='text-gray-500 py-6 md:w-[70%] text-center'>
                        I'm a Software Engineer at Atlan, where I work on ETL pipelines — handling extraction, transformation, loading, and lineage creation across data sources like Postgres, MySQL, OracleDB, Trino, Salesforce, Sigma, Looker, and Tableau for enterprise customers including HP, JPMorgan, Mastercard, Nasdaq, and CME. Previously, I've interned as a Software Engineer at IIT Bombay, Botgauge, and Unicornpost.
                    </div>
                </div>
                <div className="flex gap-4 md:gap-10">
                    <Button
                        icon={<IoChatboxEllipses className='text-2xl' />}
                        to={data.whatsappLink}
                        color={"#f7d748"}
                        text={"Let's Talk"}
                        reverse={true}
                    />
                    <Button
                        icon={<IoDocumentText className='text-2xl' />}
                        to={data.resumeLink}
                        border={"#f7d748"}
                        text={"Resume"}
                        reverse={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero