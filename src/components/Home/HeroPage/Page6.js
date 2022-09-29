import React from 'react';
import { FaMailBulk, FaPhone } from 'react-icons/fa';

const Page6 = () => {
    return (
        <container my-28 >
            <div className='flex  my-28 ml-28 pl-28'>
                <div className='w-[500px]'>
                    <h1 className='text-6xl'>Need Help?</h1>
                    <div className='flex ml-28 pt-7'>
                        <div >
                            <FaPhone className='h-[50px] w-[50px] text-primary bg-secondary rounded-full rotate-90'></FaPhone>
                        </div>
                        <div className='pl-7'>
                            <p className='text-black font-bold'>+49 176 123 456</p>
                            <span className='text-sm'>Support hotline</span>
                        </div>
                    </div>
                    <div className='flex ml-28 pt-7'>
                        <div >
                            <FaMailBulk className='h-[50px] w-[50px] text-primary bg-secondary rounded-full '></FaMailBulk>
                        </div>
                        <div className='pl-7'>
                            <p className='text-black font-bold'>help@banquee.com</p>
                            <span className='text-sm text-start'>Support Email</span>
                        </div>
                    </div>
                </div>


                <div class="w-[500px]  px-4 py-2">
                    <details class="mb-4">
                        <summary class=" py-2 px-4">
                            How do I open an Banko account?
                        </summary>

                        <span className='text-start'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima deleniti esse odio quidem tempora distinctio nemo autem, molestias aut assumenda.
                        </span>
                    </details>
                    <hr />
                    <details class="mb-4">
                        <summary class="py-2 px-4">
                            How do I order a new card?
                        </summary>

                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem praesentium molestias, earum nihil corporis in.
                        </span>
                    </details>
                    <hr />
                    <details class="mb-4">
                        <summary class="py-2 px-4">
                            How does Banko premium works?
                        </summary>

                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dolorum excepturi animi dolor dolores ipsa officia illo libero deserunt cum!
                        </span>
                    </details>
                    <hr />
                    <details class="mb-4">
                        <summary class=" py-2 px-4">
                            Can I have two Banko accounts?
                        </summary>

                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dolorum excepturi animi dolor dolores ipsa officia illo libero deserunt cum!
                        </span>
                    </details>
                    <hr />









                </div>
            </div>

        </container>
    );
};

export default Page6;