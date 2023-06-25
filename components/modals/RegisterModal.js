'use client';
import React, {useState} from 'react';
import UseRegisterModal from "@/hooks/useRegisterModal";
import axios from "axios";
import {Google} from "@mui/icons-material";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import Modal from "@/components/modals/Modal";

function RegisterModal() {
    const registerModal = UseRegisterModal();
    const [isLoading, setIsLoading] = useState(false)


    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    })

    const onSubmit = (data) => {
        setIsLoading(true)
        axios("/api/register", data)
            .then(() => {
                registerModal.onClose()
                setIsLoading(false)
            })
            .catch(e => console.log(e))
    }


    return (
        <div>
            <Modal
                disabled={isLoading}
                isOpen={registerModal.isOpen}

            />
            {/*<form onSubmit={onSubmit}>*/}
            {/*    <input {...register('firstName')} />*/}
            {/*    <input {...register('lastName', {required: true})} />*/}
            {/*    {errors.lastName && <p>Last name is required.</p>}*/}
            {/*    <input {...register('age', {pattern: /\d+/})} />*/}
            {/*    {errors.age && <p>Please enter number for age.</p>}*/}
            {/*    <input type="submit"/>*/}
            {/*</form>*/}


        </div>
    );
}

export default RegisterModal;