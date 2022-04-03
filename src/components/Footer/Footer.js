import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeCommit, faCodeBranch, faTable } from '@fortawesome/free-solid-svg-icons';
import map from './map.svg';

const Footer = () => {
    return (
        <div className='mt-4'>
            <div className="grid lg:grid-cols-4 gap-x-4 border-t-2 border-t-black pt-4 lg:px-0 px-4">
                <div className="footer-intro">
                    <div className="header-logo flex items-baseline mb-4">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book-reader" className="w-8 mr-2 svg-inline--fa fa-book-reader fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zM233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09z"></path></svg>
                        Edu-Care
                    </div>
                    <p>Get learning boost with thousand of worksheets, Games & etc.</p>
                    <div className="footer-social flex mt-4">
                        <a href="/" className='mr-2'><FontAwesomeIcon icon={faCodeCommit}></FontAwesomeIcon></a>
                        <a href="/" className='mr-2'><FontAwesomeIcon icon={faCodeBranch}></FontAwesomeIcon></a>
                        <a href="/"><FontAwesomeIcon icon={faTable}></FontAwesomeIcon></a>
                    </div>
                </div>
                <div className="footer-about">
                    <h4 className='border-b-2 border-b-[#ffd13c] w-16 mb-4 text-xl'>About</h4>
                    <p>Education refers to the discipline that is concerned with methods of teaching and learning in schools or school-like environments.</p>
                </div>
                <div className="footer-contact">
                    <h4 className='className= border-b-2 border-b-[#ffd13c] w-20 mb-4 text-xl'>Contact</h4>
                    <p>Kashimpur, Gazipur, Dhaka</p>
                    <a href="tel:+01913547448" className='block font-bold'>+8801913-547448</a>
                    <a href="mailto:rkrakibhassan680@gmail.com" className='block font-bold'>rkrakibhassan680@gmail.com</a>
                </div>
                <div className="footer-map">
                    <h4 className='className= border-b-2 border-b-[#ffd13c] w-12 mb-4 text-xl'>Map</h4>
                    <img src={map} alt="" className='max-w-full w-2/4' />
                </div>
            </div>
        </div>
    );
};

export default Footer;