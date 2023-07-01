'use client'

import React, {useState} from 'react';
import MenuItem from "@/app/components/header/MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import {signOut} from "next-auth/react";

import {Avatar, IconButton} from "@mui/material";
import {Menu} from "@mui/icons-material";

function UserMenu({currentUser}) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen((value) => !value)
    }

    const registerState = useRegisterModal()
    const loginState = useLoginModal()
    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div

                    className="
                    hidden md:flex
            text-sm
            font-semibold
            py-2
            px-4
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
          "
                >
                    Airbnb your home
                </div>
                <div className="
          px-2
          md:py-1
          md:px-2
          border-[1px]
          border-neutral-200
          flex
          flex-row
          items-center
          gap-0.5
          rounded-full
          cursor-pointer
          hover:shadow-md
          transition
          "
                ><IconButton  onClick={toggleOpen} className={"p-1"}>
                    <Menu />
                </IconButton>
                    <IconButton className={"p-1"}>
                        <Avatar className={"text-[10px]"} fontSize={"small"}/>
                    </IconButton>

                </div>
            </div>
            {isOpen && (
                <div
                    className="
            absolute
            rounded-xl
            shadow-md
            w-[40vw]
            md:w-3/4
            bg-white
            overflow-hidden
            right-0
            top-12
            text-sm
          "
                >
                    <div className="flex flex-col cursor-pointer">
                        {currentUser ? (
                            <>
                                <MenuItem
                                    label="My trips"

                                />
                                <MenuItem
                                    label="My favorites"

                                />
                                <MenuItem
                                    label="My reservations"

                                />
                                <MenuItem
                                    label="My properties"

                                />
                                <MenuItem
                                    label="Airbnb your home"

                                />
                                <hr/>
                                <MenuItem
                                    label="Logout"
                                    onClick={() => signOut()}
                                />
                            </>
                        ) : (
                            <>
                                <MenuItem
                                    label="Login"
                                    onClick={loginState.onOpen}

                                />
                                <MenuItem
                                    label="Sign up"
                                    onClick={registerState.onOpen}

                                />
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserMenu;