    import { NextResponse } from "next/server";
    import { PrismaClient } from "@prisma/client";
    import bcrypt from "bcryptjs";
    const prisma = new PrismaClient();
    export async function POST(req: Request) {
        try {
            const body = await req.json();
            const { email, password } = body;
            if (!email || !password) {
                return NextResponse.json({ error: "Missing fields" }, { status: 400 });
            }
            const user = await prisma.user.findUnique({
                where: { email },
            })
            if (!user) {
                return NextResponse.json({ error: "User not found" }, { status: 404 });
            }
            const isValid = await bcrypt.compare(password, user.password);
            if (!isValid) {
                return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
            }
            return NextResponse.json({ message: "Login successful" }, { status: 200 });
        } catch (err) {
            console.error("Signin error:", err);
            return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
        }
    }