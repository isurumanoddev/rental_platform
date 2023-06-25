'use client';
import React, {useState} from 'react';
import useRegisterModal from "@/app/hooks/useRegisterModal";


import {FieldValues, SubmitHandler, useForm} from "react-hook-form";

import Modal1 from "@/app/components/modals/Modal1";
import Heading from "@/app/components/Heading";

function RegisterModal() {
    const registerState = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false)

    console.log("-------------", registerState.isOpen)


    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    })

    const onSubmit = (data) => {


    }
    const bodyContent = (

            <Heading/>

    )


    return (

        <Modal1
            disabled={isLoading}
            title={"register"}
            isOpen={registerState.isOpen}
            onClose={registerState.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            actionLabel={"Continue"}/>


    );
}

export default RegisterModal;