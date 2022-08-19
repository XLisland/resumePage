import React from 'react';
import Image from "next/image";
import liuhaocun from'../public/assets/Liuhaocunfanpage.jpeg'
import {FireOutlined} from "@ant-design/icons";
import Link from "next/link";


const fanpage = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
                <Image className='absolut z-1' layout='fill' objectFit ='cover'  src={liuhaocun} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Liu haocun Fan Page</h2>
                    <h3>React JS / Tailwind / Ant Design</h3>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p className='py-4'>
                        This website was built using React JS and Ant Design.
                        We provide a pure community for Liu haocun's fans to share their moments.
                        which is totally a free and decentralized platform for fans.
                    </p>
                    <button className='px-8 py-2 mt-4 mr-8 text-white font-bold'>Details</button>
                    <button className='px-8 py-2 mt-4 text-white font-bold'>Previewing</button>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='flex item-center text-gray-600 py-2  '>
                                <FireOutlined className='pr-1'/>React Next.js
                            </p>
                            <p className='flex item-center text-gray-600 py-2 '>
                                <FireOutlined className='pr-1'/>JS
                            </p>
                            <p className='flex item-center text-gray-600 py-2 '>
                                <FireOutlined className='pr-1'/>Tailwind
                            </p>
                            <p className='flex item-center text-gray-600 py-2 '>
                                <FireOutlined className='pr-1'/>Ant Design
                            </p>
                            <p className='flex item-center text-gray-600 py-2 '>
                                <FireOutlined className='pr-1'/>Google API
                            </p>
                        </div>
                    </div>
                </div>
                <Link href='/#projects'>
                    <p className='underline cursor-pointer'>
                        Back
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default fanpage;
