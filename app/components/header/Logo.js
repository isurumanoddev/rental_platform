'use client'

import Image from "next/image";
import {useRouter} from "next/navigation";

function Logo() {
    const router = useRouter()
    return (
        <div>
            <Image
                onClick={() => router.push("/")}
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