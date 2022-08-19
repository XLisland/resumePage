import React,{useState,useEffect} from 'react';
import Image from "next/image";
import Link from "next/link";
import Ham from'/Users/chengyangxian/WebstormProjects/thefourth/thefourthone/public/assets/hamburgMenu.png'
import Panda from '/Users/chengyangxian/WebstormProjects/thefourth/thefourthone/public/assets/panda (1).png'
import Cancel from '/Users/chengyangxian/WebstormProjects/thefourth/thefourthone/public/assets/Cancel.png'
import {GithubOutlined, MailOutlined, WeiboOutlined, ZhihuOutlined} from "@ant-design/icons";
import {useRouter} from "next/router";

const Navbar = () => {
    const [nav,setNav] = useState(false)
    const [shadow,setShadow] =useState(false)
    const [navBg, setNavBg] = useState('#ecf0f3')
    const [linkColor, setLinkColor] = useState('#1f2937')
    const router=useRouter()

    useEffect(()=>{
        if (
            router.asPath ==='/marlboro' ||
            router.asPath ==='/liuhaocunFanPage'

        ){
            setNavBg('transparent')
            setLinkColor('#ecf0f3')
        }else{
            setNavBg('ecf0f3')
            setLinkColor('#1f2937')
        }
    },[router])

    const Handlenav=()=>{
        setNav(!nav)
    }

    useEffect(()=>{
        const handleShadow = ()=> {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll',handleShadow)
        } ,[]  )
    return (
        //TOP NAV
        <div
            className={shadow?'fixed w-full h-20 shadow-xl bg-white bg-opacity-95 z-[100]':'fixed w-full h-20  bg-white bg-opacity-95 z-[100]'}>
            <div className='px-8 flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href='/'>
                    <Image className='cursor-pointer' src={Panda} alt="/" width='50' height='50'/>
                </Link>
                    <ul className='hidden md:flex '>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                <div onClick={Handlenav} className='md:hidden'>
                    <Image className='cursor-pointer'  src={Ham} alt='/' width='40' height='40'/>
                </div>
            </div>

            {/*Left Nav*/}
            <div className={nav ? 'md:hi onClick={(}=>setNavfalse dden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%]' +
                    ' h-screen bg-white p-10 ease-in duration-500':
                    'fixed left-[-100%] top-0 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Link href='/'>
                                <Image className='cursor-pointer' src={Panda} alt="/" width='50' height='50'/>
                            </Link>
                            <div onClick={Handlenav} className=' cursor-pointer'>
                                <Image  className='p-15 border-15' src={Cancel} alt="/" width='20' height='20' />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>
                                Let's build something legendary together
                            </p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li onClick={()=>setNav(false)} className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={()=>setNav(false)} className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/#skills'>
                                <li onClick={()=>setNav(false)} className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href='/#projects'>
                                <li onClick={()=>setNav(false)} className='py-4 text-sm'>Projects</li>
                            </Link>
                            <Link href='/#contact'>
                                <li onClick={()=>setNav(false)} className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-purple-500' >Let's Connect</p>
                        </div>
                       <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                           <a
                               href='https://weibo.com/u/1876869241'
                           >
                               <div className='w-30 h-30 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                   <WeiboOutlined style={{ fontSize: '200%'}}/>
                               </div>
                           </a>
                           <a
                               href='https://github.com/XLisland'
                           >
                               <div className=' p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                   <GithubOutlined style={{ fontSize: '200%'}}/>
                               </div>
                           </a>
                           <a
                               href='mailto:chengyangxian@hotmail.com'
                           >
                               <div className=' p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                   <MailOutlined style={{ fontSize: '200%'}}/>
                               </div>
                           </a>
                           <a
                               href='https://www.zhihu.com/people/xian-cheng-yang'
                           >
                               <div className=' p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                   <ZhihuOutlined style={{ fontSize: '200%'}}/>
                               </div>
                           </a>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
