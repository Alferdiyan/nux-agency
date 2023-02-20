import Image from 'next/image';
import React from 'react';
import start from '../public/img/Imgstar.svg';
import elip from '../public/img/Ellipse 1.svg';
import nux from '../public/img/NUX DESIGN.svg';
import desktop from '../public/img/Group 1.svg';

export default function Hero() {
    return (
        <div>
            <div className="px-8 inline-flex">
                <h1 className="uppercase text-9xl font-extrabold">
                    super branding <br /> and creative <br /> ideas
                    <span>
                        <Image
                            src={start}
                            className="h-15 inline-flex align-baseline ml-6 "
                        ></Image>
                        <p className="text-sm w-60 font-semibold inline-flex pt-3 ml-6 align-top">
                            <span>
                                Nux Design creates distinctive brands, gorgeous
                                websites, and campaigns that deviate from the
                                ordinary.
                            </span>
                        </p>
                    </span>
                </h1>
            </div>
            <div>
                <ul className="flex flex-nowrap bg-black text-white font-normal text-3xl gap-4 overflow-hidden ">
                    <li>UIDESIGN</li>
                    <Image src={elip} alt="elip"></Image>
                    <li>WEBFLOW</li>
                    <Image src={elip} alt="elip"></Image>
                    <li>USERRESAERCH</li>
                    <Image src={elip} alt="elip"></Image>
                    <li>ILLUSTRATION</li>
                    <Image src={elip} alt="elip"></Image>
                    <li>DIGITALMARKETING</li>
                    <Image src={elip} alt="elip"></Image>
                    <li>BRANDING</li>
                </ul>
                <div className="bg-[#FAFF00] flex justify-center">
                    {/* <h1 className="text-9xl font-extrabold">NUX DESIGN</h1> */}
                    <Image
                        src={nux}
                        alt="nux"
                        className="w-[1373px] px-8 py-10"
                    ></Image>
                </div>
                <div>
                    <Image
                        src={desktop}
                        alt="desktop"
                        className="w-full"
                    ></Image>
                </div>
            </div>
        </div>
    );
}
