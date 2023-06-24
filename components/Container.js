'use client'
import Image from "next/image";
import {IconButton} from "@mui/material";
import {AccountCircle, Language, Menu, Search} from "@mui/icons-material";

function Container() {
    return (
        <div>
            <div className={"flex h-10 items-center relative cursor-pointer "}>
                <Image
                    src={"https://links.papareact.com/qd3"}
                    alt={"logo"}
                    width={100}
                    height={50}
                />

            </div>
            <div className={"flex justify-between md:border-2 py-2 px-4 rounded-full md:shadow-md "}>
                <input className={"text-gray-500 cursor-pointer text-xs flex-growl outline-none pl-2 "} type="text"
                       placeholder={"Start your search"}/>
                <IconButton className={" hidden md:inline-flex text-xs"}>

                    <Search className={"bg-red-400 p-1 rounded-full text-white"}/>
                </IconButton>
            </div>
            <div className={"flex items-center gap-2 justify-end text-gray-500 "}>
                <p className={" hidden md:flex text-xs font-semibold"}>Become a host</p>

                <IconButton className={"p-1"}>
                    <Language/>
                </IconButton>
                <div className="flex justify-between px-2.5 py-1.5 rounded-full border-2 gap-1">
                    <IconButton className={"p-1"}>
                        <Menu/>
                    </IconButton>
                    <IconButton className={"p-1"}>
                        <AccountCircle/>
                    </IconButton>


                </div>
            </div>
        </div>


    );
}

export default Container;