import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaGooglePlay, FaApple } from 'react-icons/fa';
import styled from 'styled-components';

const Footer = (props) => {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container mt-3">
                <div className="row">
                    {/* Logo Column */}
                    <div className="col-md-3 mb-3">
                        <img src={props.img} alt="Website Logo" className="img-fluid" />
                    </div>

                    {/* Services Column */}
                    <div className="col-md-3 mb-3">
                        <h5>Services</h5>
                        <ul className="list-unstyled lh-lg">
                            <li><a href="#News" className="text-light text-decoration-none">News</a></li>
                            <li><a href="#service2" className="text-light text-decoration-none">Articles</a></li>
                            <li><a href="#service3" className="text-light text-decoration-none">Blogs</a></li>
                            <li><a href="#service4" className="text-light text-decoration-none">Magazines</a></li>
                            <li><a href="#service5" className="text-light text-decoration-none">Awards</a></li>
                        </ul>
                    </div>

                    {/* Social Icons Column */}
                    <div className="col-md-3 mb-3">
                        <h5>Follow Us</h5>
                        <div>
                            <a href="https://facebook.com" className="text-light me-2"><FaFacebook size={24} /></a>
                            <a href="https://twitter.com" className="text-light me-2"><FaTwitter size={24} /></a>
                            <a href="https://instagram.com" className="text-light me-2"><FaInstagram size={24} /></a>
                            <a href="https://linkedin.com" className="text-light me-2"><FaLinkedin size={24} /></a>
                            <a href="https://youtube.com" className="text-light"><FaYoutube size={24} /></a>
                        </div>
                    </div>

                    {/* Download Icons Column */}
                    <div className="col-md-3 mb-3">
                        <h5>Download Our App</h5>
                        <Styledbutton className='mt-3'>
                            <i href="https://play.google.com/store/games?hl=en"> <FaGooglePlay color={'black'} size={25} /> </i>
                            <a href="https://play.google.com/store/games?hl=en">Play Store</a>
                        </Styledbutton>
                        <Styledbutton className='mt-3'>
                            <i href="https://www.apple.com/app-store/"> <FaApple color={'black'} size={25} /> </i>
                            <a href="https://www.apple.com/app-store/">App Store</a>
                        </Styledbutton>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const Styledbutton = styled.div`
    background-color: beige;
    padding: 10px 30px 10px 30px;
    width: max-content;
    border-radius: 80px;
    cursor: pointer;
    a {
        color: black;
        font-size: 17px;
        font-weight: 500;
        text-decoration: none;
    }
`;

export default Footer;
