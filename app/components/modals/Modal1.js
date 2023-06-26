'use client';

import React, {useCallback, useEffect, useState} from "react";

import {Button, IconButton} from "@mui/material";
import {Close} from "@mui/icons-material";

const Modal = ({
                   isOpen,
                   onClose,
                   onSubmit,
                   title,
                   body,
                   actionLabel,
                   footer,
                   disabled,
                   secondaryAction,
                   secondaryActionLabel
               }) => {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    const handleClose = useCallback(() => {
        if (disabled) {
            return;
        }

        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300)
    }, [onClose, disabled]);

    const handleSubmit = useCallback(() => {
        if (disabled) {
            return;
        }

        onSubmit();
    }, [onSubmit, disabled]);

    // const handleSecondaryAction = useCallback(() => {
    //     if (disabled || !secondaryAction) {
    //         return;
    //     }
    //
    //     secondaryAction();
    // }, [secondaryAction, disabled]);

    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div
                className="
          justify-center
          items-center
          flex

          fixed
          inset-0
          z-50
          outline-none
          focus:outline-none
          bg-neutral-800/70
        "
            >
                <div className="
          relative
          py-5
          w-full
          max-w-lg
          my-6
          mx-auto
          h-auto
          min-h-[300px]
          lg:h-auto
          md:h-auto
          "
                >
                    {/*content*/}
                    <div className={`
            translate
            duration-300
            h-full
            ${showModal ? 'translate-y-0' : 'translate-y-full'}
            ${showModal ? 'opacity-100' : 'opacity-0'}
          `}>
                        <div className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0
              rounded-lg
              shadow-lg
              relative
              flex
              flex-col
              w-full
              bg-white
              outline-none
              focus:outline-none
            "
                        >
                            {/*header*/}
                            <div className="
                flex
                items-center
                p-6
                rounded-t
                justify-center
                relative
                border-b-[1px]
                "
                            >
                                <IconButton onClick={handleClose} className={"text-sm text-black p-1 absolute right-1"}
                                            fontSize={"small"}>
                                    <Close fontSize={"small"}/>
                                </IconButton>
                                <div className="text-lg font-semibold">
                                    {title}
                                </div>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                                {body}
                            </div>
                            {/*footer*/}
                            <div className="flex flex-col gap-2 p-6">
                                <div
                                    className="
                    flex
                    flex-row
                    items-center
                    gap-4
                    w-full
                  "
                                >

                                    <Button
                                         onClick={handleSubmit}
                                        className={"w-full bg-rose-500 text-white hover:bg-rose-500"}>{actionLabel}</Button>

                                </div>
                                {footer}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;