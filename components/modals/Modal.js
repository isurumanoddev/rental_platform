'use client';
import React, {useCallback, useEffect, useState} from 'react';
import {Button, IconButton} from "@mui/material";
import {Close} from "@mui/icons-material";

function Modal({
                   isOpen,
                   onClose,
                   onSubmit,
                   title, body,
                   footer,
                   actionLabel,
                   disabled,
                   secondaryAction,
                   secondaryLabel
               }) {

    const [showModel, setShowModel] = useState(isOpen);
    useEffect(() => {
        setShowModel(isOpen)
    }, [isOpen]);

    const handleClose = useCallback(() => {

        setShowModel(false);


    }, [disabled, onClose,])
    const handleSubmit = useCallback(() => {
        onSubmit()


    }, [disabled, onSubmit,])


    return (

            <div
                className={"flex items-center   justify-center fixed top-0 bottom-0 right-0 left-0 z-50 bg-neutral-800/70 outline-none   "}>
                <div className={"my-10 mx-5 md:mx-auto  w-full h-auto max-w-2xl"}>

                    <div
                        className={`translate duration-500 h-full ${showModel ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}>

                        <div className={"flex flex-col  rounded-lg border-0 bg-white w-full outline-none shadow-lg  "}>

                            <div className={"flex justify-center  items-center relative p-4 border-b-2"}>
                                <p className={"font-semibold text-sm"}>Login</p>
                                <IconButton onClick={handleClose} className={"text-sm text-black p-1 absolute right-1"}
                                            fontSize={"small"}>
                                    <Close fontSize={"small"}/>
                                </IconButton>
                            </div>
                            {/*Body*/}
                            <div className={"flex flex-col gap-2 relative p-6 "}>
                                asdsad
                            </div>
                            {/*footer*/}
                            <div className={"flex justify-center   items-center relative p-3 border-t-2"}>
                                <Button className={"w-full bg-rose-500 text-white hover:bg-rose-500"}>Hello</Button>

                            </div>
                        </div>♣
                    </div>
                </div>

            </div>


    );
}

export default Modal;