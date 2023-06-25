'use client'
import React from 'react';
import Image from "next/image";

function Banner() {
    return (
        <div className={"relative h-[300px] sm:h-[350px] lg:h-[420px] xl:h-[450px] "}>
            <Image
                src={"https://links.papareact.com/0fm"}
                alt={"banner"}
                    layout={"fill"}
                    objectFit={"cover"}
                    objectPosition={"bottom"}


            />

            <div className="top-1/2 w-full absolute text-center ">
                <p className={"text-[12px] md:text-[16px]"}>Not sure Where to go ? Perfect</p>
                <button
                    className="text-purple-700 px-4 py-2 rounded-full bg-white text-[10px]
                     font-semibold shadow-md hover:shadow-xl active:scale-90 transition duration-150 md:text-[15px] md:px-6">I'm
                    flexible
                </button>
            </div>
        </div>
    );
}

export default Banner;

