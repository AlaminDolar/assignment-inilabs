import React from 'react';

const Navibar = () => {
    return (
        <div className="py-6 bg-white  navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn items-centar btn-ghost md:hidden lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

                        <li><a>Featurs</a></li>
                        <li tabIndex={0}>
                            <a>
                                Compare
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>

                        </li>
                        <li><a>Support</a></li>
                        <li tabIndex={0}>
                            <a>
                                Blog
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>

                        </li>
                    </ul>
                </div>
                <a className="font-sans text-3xl text-primary text-bold">banquee.</a>
            </div>
            <div className="hidden navbar-center md:flex lg:flex">
                <ul className="p-0 menu menu-horizontal">
                    <li><a>Featurs</a></li>
                    <li tabIndex={0}>
                        <a>
                            Compare
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>

                    </li>
                    <li><a>Support</a></li>
                    <li tabIndex={0}>
                        <a>
                            Blog
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>

                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className='font-sans text-xl mr-7 text-primary'>Login</a>
                <a className="text-white normal-case hover:text-primary hover:bg-secondary btn bg-primary ">Open Account</a>
            </div>
        </div>
    );
};

export default Navibar;