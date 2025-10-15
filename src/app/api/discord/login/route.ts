import {NextRequest,NextResponse} from 'next/server'

const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID;
const DISCORD_REDIRECT_URI = process.env.DISCORD_REDIRECT_URI;
const DISCORD_SCOPES = 'identify guilds';
export async function GET(req:NextRequest)
{
      if (!DISCORD_CLIENT_ID || !DISCORD_REDIRECT_URI) {
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
}
const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${DISCORD_REDIRECT_URI}&response_type=code&scope=${DISCORD_SCOPES}`;
return NextResponse.redirect(discordAuthUrl)

}

