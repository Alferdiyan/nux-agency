import Image from 'next/image';
import React from 'react';
import start from '../public/img/Imgstar.svg';
import yeloowstar from '../public/icon/yeloowstar.svg';
import velocity from '../public/icon/velocity.svg';
import muzica from '../public/icon/muzica.png';
import foxhub from '../public/icon/foxhub.svg';
import ztos from '../public/icon/ztos.svg';
import liva from '../public/icon/liva.svg';
import amara from '../public/icon/amara.svg';
import goldline from '../public/icon/goldline.svg';
import utosia from '../public/icon/utosia.svg';
import codelab from '../public/icon/codelab.svg';
import atika from '../public/icon/atika.svg';

export default function WorldClient() {
    return (
        <div className="pt-[125px]">
            <div className="flex justify-center px-[316px] gap-10">
                <Image className="h-[209px] w-[209px]" src={yeloowstar}></Image>
                <div>
                    <h1 className="font-medium text-lg">03 / World Client</h1>
                    <p className="uppercase text-[56px] font-semibold">
                        we are proud to work with world brands
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-5 gap-x-52 px-8 gap-y-[72px] mt-[89px] mb-[139px]">
                <Image
                    className="h-8 w-[125px]"
                    alt="elip"
                    src={velocity}
                ></Image>
                <Image
                    className="h-8 w-[125px]"
                    alt="elip"
                    src={muzica}
                ></Image>
                <Image
                    className="h-8 w-[125px]"
                    alt="elip"
                    src={foxhub}
                ></Image>
                <Image className="h-8 w-[125px]" alt="elip" src={ztos}></Image>
                <Image className="h-8 w-[125px]" alt="elip" src={liva}></Image>
                <Image className="h-8 w-[125px]" alt="elip" src={amara}></Image>
                <Image
                    className="h-8 w-[125px]"
                    alt="elip"
                    src={goldline}
                ></Image>
                <Image
                    className="h-8 w-[125px]"
                    alt="elip"
                    src={utosia}
                ></Image>
                <Image
                    className="h-8 w-[125px]"
                    alt="elip"
                    src={codelab}
                ></Image>
                <Image className="h-8 w-[125px]" alt="elip" src={atika}></Image>
            </div>
        </div>
    );
}
