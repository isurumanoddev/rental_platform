'use client';
import React, {useState} from 'react';


import {FieldValues, SubmitHandler, useForm} from "react-hook-form";

import Modal1 from "@/app/components/modals/Modal1";
import Heading from "@/app/components/Heading";
import Input from "@/app/components/Input";
// import axios from "axios";
import {Button} from "@mui/material";
import {Google} from "@mui/icons-material";

import UseLoginModal from "@/app/hooks/useLoginModal";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";
import {toast} from 'react-hot-toast'



function LoginModal() {
    const router = useRouter()

    const loginState = UseLoginModal();
    const [isLoading, setIsLoading] = useState(false)






    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            email: '',
            password: '',
        }
    })
    const onSubmit = (data) => {
        setIsLoading(true);
        signIn('credentials', {
            ...data,
            redirect: false,

        })
            .then((callback) => {
                setIsLoading(false)

                if (callback?.ok) {
                    console.log("Login success")
                    toast.success("Login Success")

                    router.refresh()
                    loginState.onClose();
                }
                if (callback?.error) {
                    toast.error("Something Went Wrong ")
                    console.log("Login Error ",callback.error)

                }

            })
            .catch((e) => console.log("Login auths  errors ",e))


    }


    const bodyContent = (
        <div className="flex flex-col gap-3">
            <Heading title={"Welcome Back !"} center subtitle={"Login to your account"}/>
            <Input register={register}
                   id={"email"}
                   label={"Email"}
                   type={"email"}
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
            <Button  className={" py-2 flex gap-5 outline-none text-white   bg-black text-sm hover:bg-black  "}
                    startIcon={<Google/>}>
                Sign in with Google
            </Button>

            <div className={"mt-4 text-gray-500 flex flex-row gap-2 items-center justify-center"}>
                <p>If you are a new user</p>
                <p onClick={loginState.onClose}
                   className={"underline cursor-pointer hover:text-gray-800 transition duration-100"}>Register</p>
            </div>
        </div>
    );


    return (

        <Modal1
            disabled={isLoading}
            title={"Login"}
            isOpen={loginState.isOpen}
            onClose={loginState.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
            actionLabel={"Login"}/>


    );
}

export default LoginModal;