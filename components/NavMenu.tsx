import React, { ReactNode } from 'react';
import Link from 'next/link';

interface NavMenuProps {
    href: string;
    children: ReactNode;
}

export default function NavMenu({ href, children }: NavMenuProps): JSX.Element {
    return (
        <div>
            <Link href={href}>
                <button className="heroButton gap-x-1 hover:text-orange-400">
                    {children}
                </button>
            </Link>
        </div>
    );
}
