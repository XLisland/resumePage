import React from 'react';
import Image from "next/image";

const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-purple-500'>Skill</p>
                <h2 className='py-4'>What I Can Do</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    {/*1 for single boxs*/}
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                     <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/logo-javascript.png' alt='/' width='65' height='65'/>
                        </div>
                         <div className='flex flex-col items-center justify-center'>
                             <h3>Javascript</h3>
                         </div>
                     </div>
                    </div>

                    {/*2 for single boxs*/}
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/assets/skills/html.png' alt='/' width='65' height='65'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    {/*3 for single boxs*/}
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/assets/skills/react.png' alt='/' width='65' height='65'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>
                    {/*4 for single boxs*/}
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/assets/skills/python.png' alt='/' width='65' height='65'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Python</h3>
                            </div>
                        </div>
                    </div>
                    {/*5 for single boxs*/}
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/assets/skills/SQL.png' alt='/' width='65' height='65'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>SQL</h3>
                            </div>
                        </div>
                    </div>
                    {/*6 for single boxs*/}
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/assets/skills/next (1).png' alt='/' width='65' height='65'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Next.js</h3>
                            </div>
                        </div>
                    </div>

                    {/*7 for single boxs*/}
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/assets/skills/redux.png' alt='/' width='65' height='65'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Redux</h3>
                            </div>
                        </div>
                    </div>
                    {/*8 for single boxs*/}
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/assets/skills/Keynote.png' alt='/' width='65' height='65'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Keynote</h3>
                            </div>
                        </div>
                    </div>

                    {/*9 for single boxs*/}
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/assets/skills/tailwindcss.png' alt='/' width='65' height='65'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>
                    {/*10 for single boxs*/}
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/assets/skills/git.png' alt='/' width='65' height='65'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Git</h3>
                            </div>
                        </div>
                    </div>

                    {/*11 for single boxs*/}
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/assets/skills/Ant Design.png' alt='/' width='65' height='65'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Ant Design</h3>
                            </div>
                        </div>
                    </div>
                    {/*12 for single boxs*/}
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/../public/assets/skills/adobephotoshop.png' alt='/' width='65' height='65'/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Photoshop</h3>
                            </div>
                        </div>
                    </div>






                </div>
            </div>
            
        </div>
    );
};

export default Skills;
