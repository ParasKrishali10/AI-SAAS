import { PrismaClient } from "@prisma/client";
import { postToDiscord } from "./discord";
const prisma = new PrismaClient();
export async function processScheduledPosts(){
    const now=new Date();
    const duePosts=await prisma.scheduledPost.findMany({
        where:{
            status:"SCHEDULED",
            scheduledFor:{lte:now},
            retryCount:{lt:3}

        },
        include:{
            server:true,
            user:true
        },take:10
    })

    console.log(`Found ${duePosts.length} posts to process`);

}