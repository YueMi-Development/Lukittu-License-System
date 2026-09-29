import { NextResponse } from 'next/server';

export async function GET() {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!;
  const redirectUri = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI!;

  const googleUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
  googleUrl.searchParams.append('client_id', clientId);
  googleUrl.searchParams.append('redirect_uri', redirectUri);
  googleUrl.searchParams.append('response_type', 'code');
  googleUrl.searchParams.append('scope', 'email profile');

  return NextResponse.redirect(googleUrl.toString());
}
