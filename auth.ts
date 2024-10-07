import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: '276321684558-9mse6d8gjr2gkdq4sff5g99sjn038pv8.apps.googleusercontent.com',
      clientSecret: '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'
    })
  ],
  secret: process.env.NEXT_PUBLIC_SECRET // ran this online openssl rand -base64 32
});
