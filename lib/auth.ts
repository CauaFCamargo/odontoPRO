import NextAuth from "next-auth"
import prisma from "./prisma"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { Adapter } from "next-auth/adapters"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"


export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma) as Adapter,
    trustHost: true,
    providers: [
        GitHub,
        // O Google sempre verifica o email, entao e seguro vincular ao
        // usuario que ja existe com o mesmo email (ex: cadastrado via GitHub).
        Google({ allowDangerousEmailAccountLinking: true })
    ]
})
    
