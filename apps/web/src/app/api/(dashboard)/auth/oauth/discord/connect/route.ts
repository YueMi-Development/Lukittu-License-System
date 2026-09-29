import { NextResponse } from 'next/server';

export async function GET() {
  const clientId = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID!;
  const redirectUri = process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI!;

  const state = Math.random().toString(36).substring(2, 15);
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + 10 * 60 * 1000);

  const discordUrl = new URL(
    'https://discord.com/api/oauth2/authorize',
  );
  discordUrl.searchParams.append('client_id', clientId);
  discordUrl.searchParams.append('redirect_uri', redirectUri);
  discordUrl.searchParams.append('response_type', 'code');
  discordUrl.searchParams.append(
    'scope',
    'identify guilds guilds.members.read',
  );
  discordUrl.searchParams.append('state', state);

  const response = NextResponse.redirect(discordUrl.toString());
  response.cookies.set('discord_oauth_state', state, {
    path: '/',
    expires: expirationDate,
    sameSite: 'lax',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  });

  return response;
}
