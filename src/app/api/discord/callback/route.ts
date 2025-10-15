import { PrismaClient } from "@prisma/client";
import { NextRequest,NextResponse } from "next/server";
import * as querystring from 'querystring';

const prisma=new PrismaClient()
const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID!;
const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET!;
const DISCORD_REDIRECT_URI = process.env.DISCORD_REDIRECT_URI!;

async function fetchDiscord(path:string,token:string){
    const res=await fetch(`https://discord.com/api/${path}`,{
        headers:{'Authorization':`Bearer ${token}`}
    })
    if(!res.ok)  throw new Error(`Discord API Error: ${res.status}`);
    return res.json()
}