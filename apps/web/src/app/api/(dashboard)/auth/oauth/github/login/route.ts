import { NextResponse } from 'next/server';

export async function GET() {
  const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID!;
  const redirectUri = process.env.NEXT_PUBLIC_GITHUB_REDIRECT_URI!;

  const githubUrl = new URL('https://github.com/login/oauth/authorize');
  githubUrl.searchParams.append('client_id', clientId);
  githubUrl.searchParams.append('redirect_uri', redirectUri);
  githubUrl.searchParams.append('scope', 'user:email read:user');

  return NextResponse.redirect(githubUrl.toString());
}
