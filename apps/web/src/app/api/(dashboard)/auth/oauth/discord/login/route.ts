import { NextResponse } from 'next/server';

export async function GET() {
  const clientId = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID!;

  const discordUrl = new URL(
    'https://discord.com/oauth2/authorize',
  );
  discordUrl.searchParams.append('client_id', clientId);

  return NextResponse.redirect(discordUrl.toString());
}
