import React from 'react';
import { SocialIcon } from 'react-social-icons';
import Collaborate from './button/Collaborate';
import NavMenu from './NavMenu';
import logo from '../public/img/Nuxdsgn.svg';
import Image from 'next/image';

export default function Navbar() {
    return (
        <div className=" flex gap-11 mx-8 items-center justify-between ">
            <div className="">
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
            <div className="flex items-center justify-center gap-8">
                <NavMenu href="#about" className="heroButton">
                    Home
                </NavMenu>
                <NavMenu href="#about" className="heroButton">
                    Service
                </NavMenu>
                <NavMenu href="#about" className="heroButton">
                    Project
                </NavMenu>
                <Image
                    src={logo}
                    className="h-6 mx-10 flex items-center  text-black"
                ></Image>

                <NavMenu href="#about" className="heroButton">
                    Testimonials
                </NavMenu>
                <NavMenu href="#about" className="heroButton">
                    Blog
                </NavMenu>
                <NavMenu href="#about" className="heroButton">
                    Contact
                </NavMenu>
            </div>

            <div>
                <Collaborate />
            </div>
        </div>
    );
}
