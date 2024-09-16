import React from 'react';
import { SocialIcon } from 'react-social-icons';
import Collaborate from './button/Collaborate';
import NavMenu from './NavMenu';
import logo from '../public/img/Nuxdsgn.svg';
import Image from 'next/image';

export default function Navbar(): JSX.Element {
    return (
        <div className="flex gap-11 mx-8 items-center justify-between">
            {/* Social Media Icons */}
            <div className="flex gap-4">
                <SocialIcon
                    url="https://www.instagram.com/ferdiyan"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://medium.com/Alferdiyan"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://www.dribbble.com/in/eka-ferdiyanto-11ab551b2/"
                    fgColor="gray"
                    bgColor="transparent"
                />
            </div>

            {/* Navigation Menu */}
            <div className="flex items-center justify-center gap-8">
                <NavMenu href="#home">Home</NavMenu>
                <NavMenu href="#services">Service</NavMenu>
                <NavMenu href="#projects">Project</NavMenu>

                {/* Logo */}
                <Image
                    src={logo}
                    className="h-6 mx-10 flex items-center"
                    alt="logo"
                />

                <NavMenu href="#testimonials">Testimonials</NavMenu>
                <NavMenu href="#blog">Blog</NavMenu>
                <NavMenu href="#contact">Contact</NavMenu>
            </div>

            {/* Collaborate Button */}
            <div>
                <Collaborate />
            </div>
        </div>
    );
}
