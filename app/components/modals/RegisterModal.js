'use client';
import React, {useState} from 'react';
import useRegisterModal from "@/app/hooks/useRegisterModal";


import {FieldValues, SubmitHandler, useForm} from "react-hook-form";

import Modal1 from "@/app/components/modals/Modal1";
import Heading from "@/app/components/Heading";
import Input from "@/app/components/Input";
// import axios from "axios";
import {Button} from "@mui/material";
import {Google} from "@mui/icons-material";
import axios from "axios";


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
        setIsLoading(true);
        axios.post("/api/register", data)
            .then(() => {
                registerState.onClose()
                setIsLoading(false)
            } )
            .catch(errors => {
                console.log(errors)
            })


    }
    const bodyContent = (
        <div className="flex flex-col gap-3">
            <Heading title={"Welcome to airbnb !"} center subtitle={"Create an account"}/>
            <Input register={register}
                   id={"email"}
                   label={"Email"}
                   type={"email"}
                   errors={errors}


            /> <Input register={register}
                      id={"name"}
                      label={"Name"}
                      type={"text"}
                      errors={errors}


        />
            <Input register={register}
                   id={"password"}
                   label={"Password"}
                   type={"password"}
                   errors={errors}


            />

        </div>

    )
    const footerContent = (
        <div className={"flex flex-col gap-3 mt-3"}>
            <Button className={" py-2 flex gap-5 outline-none text-white   bg-black text-sm hover:bg-black  "}
                    startIcon={<Google/>}>
                Sign in with Google
            </Button>

            <div className={"mt-4 text-gray-500 flex flex-row gap-2 items-center justify-center"}>
                <p>Already have an account</p>
                <p onClick={registerState.onClose} className={"underline cursor-pointer hover:text-gray-800 transition duration-100"}>Login</p>
            </div>
        </div>
    );



    return (

        <Modal1
            disabled={isLoading}
            title={"register"}
            isOpen={registerState.isOpen}
            onClose={registerState.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
            actionLabel={"Continue"}/>


    );
}

export default RegisterModal;