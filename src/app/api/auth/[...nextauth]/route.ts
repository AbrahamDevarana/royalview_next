import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/libs/prisma";


const googleId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string;
const googleSecret = process.env.NEXT_SECRET_GOOGLE_CLIENT_ID as string;

const secretKey = process.env.NEXT_SECRET_KEY as string;


const handler = NextAuth({
    pages: {
        signIn: "/blog/auth/login",
    },
    secret: secretKey,
    callbacks: {
        signIn: async ({user, account, profile}) => {

            if(profile && !/devarana.mx$/.test(profile.email as string)) return false

            const findUser = await prisma.user.findUnique({
                where: {
                    email: profile?.email as string,
                    status: true
                },
            });
            if (!findUser) return false;
            return true
        },
        session: async ({session, token}) => {
            session = {
                ...session,
                ...token
            }
            return session;
        },
    },
    providers: [
        GoogleProvider({
            clientId: googleId,
            clientSecret: googleSecret,
            authorization: {
                params: {
                    access_type: "offline",
                    prompt: "consent",
                    response_type: "code",
                },
            }
        }),
    ],
    // debug: true,
})


export { handler as GET, handler as POST }