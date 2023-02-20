import Image from 'next/image';
import React from 'react';
import nicho from '../public/img/ImageNicho.png';

export default function Testimonials() {
    return (
        <div
            className="bg-local bg-black text-white px-8 pt-20 font-clash-display"
            style={{
                backgroundImage: "url('/img/BgNoise.png')",
            }}
        >
            <h1>05 / Testimonials</h1>
            <p className="font-bold text-[56px] pt-2 uppercase">
                Hear what our customers have to say about us.
            </p>

            {/* Testimonials  */}
            <div>
                <p className="pt-[108px] font-semibold uppercase text-2xl text-[#FAFF00]">
                    “ I'm happy that I chose NUX to help me create a website for
                    company's and mobile apps.
                    <span className="text-white ">
                        They did a fantastic job quickly putting the site
                        together. Cryses and his colleagues are incredibly
                        detail-oriented and receptive to my suggestions.
                    </span>{' '}
                    “
                </p>
                <div className="flex items-center gap-4 pt-12 pb-[108px]">
                    <Image
                        className="w-[60px]"
                        src={nicho}
                        alt="Nicho profile"
                    ></Image>
                    <div>
                        <p>Nicholas Sans Alexander </p>
                        <p>World Costumer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
