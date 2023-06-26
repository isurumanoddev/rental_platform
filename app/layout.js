import './globals.css'
import {Sora} from 'next/font/google'
import Header from "@/app/components/header/Header";

import RegisterModal from "@/app/components/modals/RegisterModal";
import React from "react";
import LoginModal from "@/app/components/modals/LoginModal";
import getCurrentUser from "@/app/actions/getCurrentUser";


const inter = Sora({subsets: ['latin']})

export const metadata = {
    title: 'Rental Platform',
    description: 'Generated by create next app',
}

export default async function RootLayout({children}) {
    const currentUser = await  getCurrentUser()


    return (
        <html lang="en">

        <body className={inter.className}>

        <RegisterModal/>
        <LoginModal/>
        <Header currentUser={currentUser}/>
        {children}</body>
        </html>
    )
}
