import React, { Children } from 'react';

export default function ServiceNav({ nomor, Children, slas }) {
    return (
        <div className="flex gap-1 uppercase">
            <span className="text-sm pt-3">{nomor}</span>
            <p className="text-[56px] text-yellow-400">{Children}</p>
            <span className="text-[56px]">{slas}</span>
        </div>
    );
}
