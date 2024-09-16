import Image from 'next/image';
import React from 'react';
import gym from '../public/img/GymFitness.png';
import law from '../public/img/law.png';

export default function Project() {
    return (
        <div className="mx-8">
            <div className="mt-[22px]">
                <h1 className="text-lg font-normal">02 / project</h1>
                <div className="flex justify-between">
                    <h1>
                        <h2 className="text-[56px] font-bold uppercase">
                            <p className="pb-0">Our latest</p>
                            <p className="pt-0">Project</p>
                        </h2>
                    </h1>
                    <p className="text-lg max-w-[443px] font-semibold">
                        Only full-service thinking can lead to progress.
                        <br />
                        We&apos;ve developed a company that covers the entire{' '}
                        <br />
                        customer experience, concentrating on internet <br />
                        usage and the effects that each touchpoint has on <br />
                        your brand.
                    </p>
                </div>
            </div>
            {/* card */}
            <div>
                <div className="w-full mb-8 bg-black ">
                    <span className="">
                        <Image
                            className="pt-[54px] px-[23px] w-full"
                            src={gym}
                            alt="gym"
                        ></Image>
                    </span>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <p className="uppercase font-bold text-2xl">
                            Gym Fitness apps
                        </p>
                        <p className=" text-lg">Indonesian client</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="uppercase font-bold text-2xl">2017</p>
                        <p className=" text-lg">2 Month</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="w-full mb-8">
                    <Image
                        className="pt-[54px]  w-full"
                        src={law}
                        alt="law"
                    ></Image>
                </div>

                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <p className="uppercase font-bold text-2xl">
                            Gym Fitness apps
                        </p>
                        <p className=" text-lg">Indonesian client</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="uppercase font-bold text-2xl">2017</p>
                        <p className=" text-lg">2 Month</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
