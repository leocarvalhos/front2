import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const nextAuthOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'username', type: 'text' },
        password: { label: 'password', type: 'password' },
      },

      async authorize(credentials, req) {
        const response = await fetch('http://localhost:3001/users/login', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
        });

        const user = await response.json();

        if (user && response.ok) {
          return user;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: '/sign-in',
  },
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },
    async session({ session, token }) {
      session = token.user as any;
      return session;
    },
  },
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions };
