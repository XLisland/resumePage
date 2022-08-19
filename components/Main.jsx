import React from 'react';
import Image from "next/image";
import {
    GithubOutlined,
    GoogleOutlined,
    LinkedinOutlined,
    MailOutlined,
    WechatOutlined,
    WeiboOutlined, ZhihuOutlined
} from "@ant-design/icons";

const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                <p className='uppercase text-sm tracking-widest text-gray-500'> Embrace the Tech</p>
                <h1 className='py-4 text-gray-700'>Hi, I'm<span className='text-purple-500'> Charles</span> </h1>
                    <h1 className='py-4 text-gray-700'> A Front Web Beginner </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I am a Master student, now I am studying in Uni Würzburg. My interest field is Pre-Modern Salt History and Popular Culture, I like computational tech as well, because it greatly enhanced we humanities' learner's capacity</p>
                {/*icons contact*/}
                <div className=' flex items-center justify-between max-w-[330px] m-auto py-4 '>
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
    );
};

export default Main;
