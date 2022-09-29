import React from 'react';
import { FaArrowLeft, FaCheck, FaHome, FaIdCard, FaInfoCircle, FaQuestionCircle, FaSave, FaTools, FaUser, FaUserLock } from 'react-icons/fa';
import Card from '../../Card/Card';

const Page3 = () => {
    return (
        <div className="min-h-screen bg-white hero">
            <div className='flex gap-11'>
                <div className='w-[538px] h-[140px] my-3'>
                    <h5 className='my-3 font-sans text-xl text-black text-start pt-28'>Cards</h5>
                    <h2 className='my-3 font-sans text-7xl text-black text-start '>Manage
                        your cards</h2>
                    <p className='my-3 text-xl font-inter text-start'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <div className='flex items-center gap-3'>
                        <FaCheck className='w-5 h-5 rounded-full text-primary bg-secondary'></FaCheck>
                        <p className='text-medium'>Malesuada Ipsum</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <FaCheck className='w-5 h-5 rounded-full text-primary bg-secondary'></FaCheck>
                        <p className='text-medium'>Vestibulum</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <FaCheck className='w-5 h-5 rounded-full text-primary bg-secondary'></FaCheck>
                        <p className='text-medium'>Parturient Lorem</p>
                    </div>
                </div>
                <div>
                    <div className="mockup-phone">
                        <div className="camera"></div>
                        <div className="display ">
                            <div className="artboard artboard-demo phone-4">
                                <div className='flex  items-center gap-28 pt-6'>
                                    <FaArrowLeft></FaArrowLeft>
                                    <h2 className='text-xl text-black'>Cards</h2>
                                    <FaQuestionCircle></FaQuestionCircle>
                                </div>

                                <div>
                                    <Card pClass='mt-[20px]' bgClass='w-[310px] h-[186px]    bg-gradient-to-r from-info to-success'></Card>

                                </div>
                                <div className='flex gap-11 pt-3'>

                                    <div>
                                        <p><FaInfoCircle className='text-primary bg-secondary h-[40px] w-[40px] rounded-full'></FaInfoCircle></p>
                                        <p>Details</p>
                                    </div>
                                    <div>
                                        <p><FaUserLock className='text-primary bg-secondary h-[40px] w-[40px] rounded-full'></FaUserLock></p>
                                        <p>Lock Card</p>
                                    </div>
                                    <div>
                                        <p><FaTools className='text-primary bg-secondary h-[40px] w-[40px] rounded-full'></FaTools></p>
                                        <p>Setting</p>
                                    </div>
                                </div>

                                <h1 className='text-xl pt-3 text-black text-start'>All Card</h1>
                                <div className=''>
                                    <Card pClass='mt-[20px]' bgClass='w-[310px] h-[186px] bg-gradient-to-r  from-warning to-error'></Card>
                                    <div className='relative'>
                                        <Card pClass='mt-[20px]' bgClass='w-[310px] h-[186px] bg-gradient-to-r from-accent to-neutral'></Card>
                                    </div>
                                </div>



                                <div className='flex pt-11 items-center justify-center  text-center gap-7'>
                                    <div className='text-center'>
                                        <FaHome ></FaHome>
                                        <p className='text-black '>Home</p>
                                    </div>
                                    <div>
                                        <FaSave></FaSave>
                                        <p className='text-black '>Savings</p>
                                    </div>
                                    <div>
                                        <FaIdCard></FaIdCard>
                                        <p className='text-black '>Card</p>
                                    </div>
                                    <div>
                                        <FaUser />
                                        <p className='text-center text-black'>Account </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Page3;