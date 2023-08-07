import NextAuth, {AuthOptions} from "next-auth";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import prisma from "@/app/libs/prismadb";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,


        }),
        Credentials({
            name: 'credentials',
            credentials: {
                email: {label: 'email', type: 'text'},
                password: {label: 'password', type: 'password'},

            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Invalid Credentials");

                }
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials?.email,

                    }
                })

                if (!user || !user?.hashedPassword) {
                    throw new Error("Invalid Credentials");

                }
                const isCorrectPassword = await bcrypt.compare(
                    credentials?.password,
                    user.hashedPassword
                );
                if (!isCorrectPassword) {
                    throw new Error("Password is not correct");


                }

                return user


            },

        })


    ],
    pages: {
        signIn: '/',
    },
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: 'jwt',

    },
    secret:process.env.NEXTAUTH_SECRET
};

export default NextAuth(authOptions)