import Image from 'next/image';
import React from 'react';

export default function Footer() {
    return (
        <div className="py-[116px] font-clash-display ">
            <div className="flex flex-col justify-center items-center">
                <div className="text-[139px] font-bold border flex flex-col justify-center items-center ">
                    <p className="p-0">Let's work</p>
                    <p className=""> together</p>
                    <p className=""> Lets Creative</p>
                </div>
                <div>
                    <button className="border rounded-2xl">
                        Consult With Team
                    </button>
                </div>
            </div>

            <div>
                <div>
                    <div>
                        <p>
                            Would you like to work with us? Let's! work together
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                        <p>+62 824 - 2637 - 8823</p>
                        <p>+62 813 - 3445 - 9349</p>
                        <p>Nuxstudio@design.io</p>
                    </div>
                    <div>
                        <p>Dribbble</p>
                        <p>Behance</p>
                        <p>LinkedIn</p>
                        <p>Instagram</p>
                        <p>Facebook</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
