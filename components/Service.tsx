import Image from 'next/image';
import React from 'react';
import bgnoise from '../public/img/BgNoise.png';
import ServiceNav from './ServiceNav';
import arrow from '../public/icon/Arrow.svg';

export default function Service() {
    return (
        <div className="text-white bg-black relative pb-10">
            <div className="px-64 py-[86px]">
                <h1 className="text-lg">01/Service</h1>
                <p className="text-[56px] uppercase font-bold">
                    a full-service design firm whose perspective creates digital
                    experiences.
                </p>
                <p className="w-[430px] pt-[88px]">
                    - We have a love for finding the best digital solutions for
                    forward-thinking brands who want to push the envelope and
                    make a big impact.
                </p>
            </div>
            <div className="gap-3 px-8 pb-8">
                <div className="flex justify-end gap-3">
                    <ServiceNav nomor="01" slas="/" Children="UIUXDESIGN" />
                    <ServiceNav nomor="02" slas="/" Children="BRANDING" />
                    <ServiceNav nomor="03" slas="/" Children="WEBFLOW" />
                </div>
                <div className="flex justify-start gap-3">
                    <ServiceNav nomor="03" slas="/" Children="illustration" />
                    <ServiceNav nomor="03" slas="/" Children="marketing" />
                    <ServiceNav nomor="03" slas="/" Children="research" />
                </div>
            </div>
            <div className="flex justify-center">
                <Image
                    className="w-[132px] h-[133px]  flex justify-center rotat"
                    src={arrow}
                    alt="arrow"
                ></Image>
            </div>
        </div>
    );
}

{
    /* // Isi dari section
<div className="background">
    Service
</div> */
}
