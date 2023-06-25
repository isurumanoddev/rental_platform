'use client'
import React from 'react';
import Image from "next/image";

function SmallCard({location, image, distance}) {
    return (
        <div className="flex  gap-1 items-center
                                 hover:scale-105 transition duration-180
                                overflow-hidden
                                ">
            <div className={"w-16 h-16 relative"}><Image
                layout={"fill"}
                src={image} alt="logo"
                className={"rounded-lg object-cover "}/></div>
            <div className={"p-2 flex flex-col"}>
                <h5 className={"text-sm"}>{location}</h5>
                <p className={"text-[11px]"}>{distance} KM away</p>

            </div>
        </div>
    );
}

export default SmallCard;
