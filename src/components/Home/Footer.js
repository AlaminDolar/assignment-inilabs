import React from 'react';

const Footer = () => {
    return (
        <div className='mt-28'>
            <hr />
            <footer className="footer  p-20 bg-white text-base-content">

                <a className="font-sans text-3xl text-primary text-bold">banquee.</a>

                <div>


                </div>
                <div>
                    <span className=" text-black font-bold text-xl">About</span>
                    <a className="footer-title link link-hover">Fatures</a>
                    <a className="footer-title link link-hover">Pricing</a>
                    <a className="footer-title link link-hover">Support</a>

                </div>
                <div>
                    <span className=" text-black font-bold text-xl">Blog</span>
                    <a className="footer-title link link-hover">Products</a>
                    <a className="footer-title link link-hover">Technology</a>
                    <a className="footer-title link link-hover">Crypto</a>

                </div>
                <div>
                    <span className=" text-black font-bold text-xl">Webflow</span>
                    <a className="footer-title link link-hover">Styleguide</a>
                    <a className="footer-title link link-hover">Licensing</a>
                    <a className="footer-title link link-hover">Changelog</a>

                </div>
                <div>
                    <span className=" text-black font-bold text-xl">Social Media</span>
                    <a className="footer-title link link-hover">Twitwer</a>
                    <a className="footer-title link link-hover">Facebook</a>
                    <a className="footer-title link link-hover">Instragram</a>

                </div>

            </footer >
        </div >
    );
};

export default Footer;