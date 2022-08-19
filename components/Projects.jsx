import React from 'react';
import Image from "next/image";
import Work1 from '../public/assets/Marlboro.png'
import Work2 from '../public/assets/Liuhaocunfanpage.jpeg'
import Link from "next/link";

const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-purple-500'>Projects</p>
                <h2 className='py-4'>What I've Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    {/*    work1*/}
                    <div className='group relative flex  items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 hover:bg-gradient-to-r from-purple-500 to-fuchsia-300'>
                        <Image className='rounded-xl group-hover:opacity-10' src={Work1} alt='/' />
                        {/*hover and info*/}
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-2xl text-white tracking-wider text-center'>Marlboro Membership System</h3>
                        <p className='pb-4 pt-2 text-white text-center'>React JS</p>
                        <Link href='/marlboro'>
                            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Information</p>
                        </Link>
                    </div>
                    </div>

                    {/*    work2*/}
                    <div className='group relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 hover:bg-gradient-to-r from-purple-500 to-fuchsia-300  '>
                        <Image className='rounded-xl group-hover:opacity-10' src={Work2} alt='/' />
                        {/*hover and info*/}
                        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <h3 className='text-2xl text-white tracking-wider text-center'>Liu Haocun's Fan page</h3>
                            <p className='pb-4 pt-2 text-white text-center'>React JS</p>
                            <Link href='/liuhaocunFanPage'>
                                <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Information</p>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Projects;
