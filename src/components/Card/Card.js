import React from 'react';
import { FaWifi } from 'react-icons/fa';


const Card = ({ bgClass }) => {
    return (
        <div className={`shadow-xl  card   ${bgClass}`}>


            <div className="card-body">
                <div className='flex justify-between'>
                    <h2 className="font-sans text-xl text-white card-title">Banquee</h2>
                    <div>
                        <p className='text-white rotate-90'><FaWifi></FaWifi></p>
                    </div>
                </div>
                <p className="mt-[57px] text-white font-sans ">
                    4642  3489  9867  7632
                </p>
                <div className="pt-[26.55px] pr-6">
                    <div className="flex justify-between">
                        <div className="">
                            <p className="text-xs text-white font-inter">
                                Card Holder
                            </p>
                            <p className="text-sm tracking-wider text-white font-inter">
                                John Doe
                            </p>
                        </div>
                        <div className="">
                            <p className="text-xs text-white font-inter">
                                Expiry Date
                            </p>
                            <p className="text-sm tracking-wider text-white font-inter">
                                03/25
                            </p>
                        </div>

                        <div className="">
                            <p className="text-xs text-white font-inter">
                                CVV
                            </p>
                            <p className="text-sm font-bold tracking-more-wider">
                                ···
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Card;