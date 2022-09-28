import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Card from '../../Card/Card';


const Pages1 = () => {

    return (
        <section className='bg-secondary '>
            <div className="min-h-screen hero ">
                <div className="text-center  hero-content">
                    <div className="max-w-lg">
                        <p className='font-sans text-xl'>Features</p>
                        <h1 className="font-sans text-black text-7xl">All in one card</h1>
                        <p className="max-w-md py-6">Senectus et netus et malesuada fames ac turpis.
                            Sagittis vitae et leo duis ut diam.</p>
                        <div className='flex items-center justify-center gap-4' >
                            <a className="text-white normal-case hover:text-primary hover:bg-secondary btn bg-primary ">Open Account</a>

                            <div className='flex items-center justify-center gap-3 '>
                                <button className='font-sans text-xl text-primary'>Compare cards</button>
                                <p className='text-primary'><FaArrowRight></FaArrowRight></p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='pt-72 bg-secondary'>
                    <div className='grid grid-cols-5 mt-62  pr-32 '>
                        <div className='translate-y-96 '>
                            <Card bgClass=' rotate-90 w-96 bg-gradient-to-r from-warning to-error'></Card>
                        </div>
                        <div className='translate-y-72 '>
                            <Card bgClass=' w-96 rotate-90 bg-gradient-to-r from-info to-success'></Card>
                        </div >

                        <div className='translate-y-60'>
                            <Card bgClass='rotate-90 w-96 bg-gradient-to-r from-accent to-neutral'></Card>
                        </div>
                        <div className='translate-y-72'>
                            <Card bgClass='rotate-90 w-96 bg-gradient-to-r from-info to-success'></Card>
                        </div >
                        <div className='translate-y-96'>
                            <Card bgClass='rotate-90 w-96 bg-gradient-to-r from-warning to-error'></Card>
                        </div>

                    </div>
                </div>

            </div>





        </section>
    );
};

export default Pages1;