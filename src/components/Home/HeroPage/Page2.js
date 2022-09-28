
import React from 'react';
import { FaApple, FaArrowRight, FaCheck, FaHome, FaIdCard, FaSave, FaUser, FaUserCheck } from 'react-icons/fa';
import Card from '../../Card/Card';

const Page2 = () => {
    return (
        <div className="relative min-h-screen my-32 bg-white hero">
            <div className='flex pt-28 gap-11'>
                <div className='w-[538px] h-[140px] my-3'>
                    <h5 className='my-3 font-sans text-xl text-black text-start pt-28'>Transactions</h5>
                    <h2 className='my-3 font-sans text-6xl text-black text-start '>Send & receive money instantly</h2>
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
                                <div className='flex items-center gap-3'>
                                    <div> <h5 className='text-sm'>Current balance</h5></div>
                                    <div><h5 className='text-xl font-bold'>$ 4.658,50</h5></div>
                                </div>

                                <div>
                                    <Card bgClass='w-[310px]   bg-gradient-to-r from-info to-success'></Card>

                                </div>
                                <div>
                                    <div className='flex items-center gap-3 my-2'>
                                        <FaUserCheck className='w-6 h-6 rounded-full bg-secondary text-primary'></FaUserCheck>
                                        <p className='text-sm'>Send money</p>
                                        <FaUserCheck className='w-6 h-6 rounded-full bg-secondary text-primary'></FaUserCheck>
                                        <p className='text-sm'>Receive money</p>
                                    </div>
                                    <div className='flex items-center justify-between '>
                                        <h6 className='text-xl text-black'>Transactions</h6>
                                        <div className='flex items-center justify-center gap-3 '>
                                            <button className='font-sans text-xl text-primary'>View all</button>
                                            <p className='text-primary'><FaArrowRight></FaArrowRight></p>

                                        </div>
                                    </div>
                                </div>

                                <div className='flex items-center gap-16 p-3 mt-2 rounded bg-secondary'>
                                    <div className='flex items-center gap-3 '>
                                        <FaApple className='twxt-white bg-primary h-[40px] w-[40px] rounded'></FaApple>
                                        <div>
                                            <h2 className='font-sans text-black'>Apple</h2>
                                            <p className='text-sm text-black'>Electronic</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className='text-xl text-black'>-799$</h1>
                                    </div>
                                </div>

                                <div className='flex items-center gap-16 p-3 mt-2 rounded bg-secondary'>
                                    <div className='flex items-center gap-3 '>
                                        <FaApple className='twxt-white bg-primary h-[40px] w-[40px] rounded'></FaApple>
                                        <div>
                                            <h2 className='font-sans text-black'>Apple</h2>
                                            <p className='text-sm text-black'>Electronic</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className='text-xl text-black'>-799$</h1>
                                    </div>
                                </div>

                                <div className='flex items-center gap-16 p-3 mt-2 rounded bg-secondary'>
                                    <div className='flex items-center gap-3 '>
                                        <FaApple className='twxt-white bg-primary h-[40px] w-[40px] rounded'></FaApple>
                                        <div>
                                            <h2 className='font-sans text-black'>Apple</h2>
                                            <p className='text-sm text-black'>Electronic</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className='text-xl text-black'>-799$</h1>
                                    </div>
                                </div>

                                <div className='flex items-center gap-16 p-3 mt-2 rounded bg-secondary'>
                                    <div className='flex items-center gap-3 '>
                                        <FaApple className='twxt-white bg-primary h-[40px] w-[40px] rounded'></FaApple>
                                        <div>
                                            <h2 className='font-sans text-black'>Apple</h2>
                                            <p className='text-sm text-black'>Electronic</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className='text-xl text-black'>-799$</h1>
                                    </div>
                                </div>


                                <div className='flex items-center justify-center p-6 text-center gap-7'>
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

export default Page2;