export const runtime = 'nodejs'

import prisma from "@/lib/prisma"
import { hash } from "bcrypt"

export async function POST(req) {
    try {
        const { email, password } = await req.json()
        const hashedPassword = await hash(password, 10)
    
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
            },
        })
    
        return new Response(JSON.stringify({ message: "User registered successfully" }), { status: 201 })
    } catch (error) {
        if (error.code === "P2002" && error.meta?.target?.includes("email")) {
            return new Response(JSON.stringify({ error: "User already exists" }), { status: 400 });
        }
        console.error('Error en /api/register:', error)
    return new Response(JSON.stringify({ error: error.message }), { status: 500 })
    }
}