import React from 'react';

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1120px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-purple-500 '>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-500'>I ma not a normal Master student who learn Humanities</p>
                    <p className='py-2 text-gray-500'>I embrace the tech, and hope utilize the digital tech to deal with the problems on traditional Humanities</p>
                    <p className='py-2 text-gray-500'>On the one hand, I have a stable knowledge on Humanities, and good at analyse historical issues with a quantitative approach</p>
                    <p className='py-2 text-gray-500 underline cursor-pointer'>Check out some of my latest works</p>
                </div>
                <div className='w-full h-auto m-auto shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <img className='rounded-xl' src='https://www.atriainnovation.com/wp-content/uploads/2021/02/portada.jpg' alt='/' />
                </div>
            </div>
        </div>
    );
};

export default About;
