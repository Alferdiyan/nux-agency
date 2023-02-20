import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import yeloowstar from '../public/icon/yeloowstar.svg';
import photo1 from '../public/img/imagephoto-1.png';
import photo2 from '../public/img/imagephoto-2.png';
import photo3 from '../public/img/imagephoto-3.png';
import photo4 from '../public/img/imagephoto.png';

export default function AboutUs() {
    return (
        <div
            className="bg-local bg-black text-white px-8"
            style={{
                backgroundImage: "url('/img/BgNoise.png')",
            }}
        >
            <div className="pt-[89px]">
                <h1 className="font-clash-display ">04/ About Us</h1>
                <h1 className="text-[56px] font-semibold font-clash-display uppercase">
                    Collaborate between <br /> systems thinking and good <br />{' '}
                    craftsmanship.
                </h1>
            </div>
            <div className="flex gap-6 justify-evenly">
                <Image
                    className="h-58 w-56 filter grayscale"
                    src={photo4}
                ></Image>
                <Image
                    className="h-58 w-56 filter grayscale"
                    src={photo1}
                ></Image>
                <Image
                    className="h-58  w-56 filter grayscale"
                    src={photo2}
                ></Image>
                <Image
                    className="h-58  w-56 filter grayscale"
                    src={photo3}
                ></Image>
            </div>
            <div className="flex justify-center font-clash-display pt-[72px]">
                <button className=" border text-base font-semibold rounded-3xl px-4 py-2 bg-white hover:bg-slate-900 text-black hover:text-white">
                    Meet The Team
                </button>
            </div>
        </div>
    );
}
