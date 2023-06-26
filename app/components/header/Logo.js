'use client'

import Image from "next/image";

function Logo() {
    return (
        <div>
            <Image

                className="flex cursor-pointer"
                src="https://links.papareact.com/qd3"
                height="100"
                width="100"
                alt="Logo"
            />
        </div>

    )
        ;
}

export default Logo;