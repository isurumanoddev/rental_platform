import {getServerSession} from "next-auth/next";
import {authOptions} from "@/app/api/auth/[...nextauth]";
import prisma from "@/app/libs/prismadb";

export async  function getSession() {
    return await getServerSession(authOptions);
    
}

export async function getCurrentUser() {
    try {
        const session = getSession();
        if (!session?.user?.email) {
            return null;

        }
        const currentUser = await prisma.user.findUnique({
            where:{
                email:session.user.email
            }
        })
        if (!currentUser) {
            return null
        }
        return currentUser

    }catch (e) {
        console.log("Error current user : ",e)

    }
}