import clientPromise from '@/lib/mongodb';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { getServerSession } from 'next-auth';

const emails = ['fahimabidshoumikfahimabids@gmail.com']; // lowercased whitelist

export const auth = {
  secret: process.env.SECRET + Date.now().toString(),

   session: {
    strategy: 'jwt', 
  },
  
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async jwt({ token, user,account }) {
      // On first login, store user's email in token
      console.log('[JWT CALLBACK]');
    console.log('user:', user);
      if (user?.email) {
        token.email = user.email.toLowerCase();
      }
      return token;
    },
    async session({ session, token }) {
      // Use token.email to ensure consistency
      console.log('[SESSION CALLBACK]');
    console.log('session before modification:', session);
    console.log('tokennn:', token);
       const email = token?.email?.toLowerCase() || session?.user?.email?.toLowerCase() || '';

      if (emails.includes(email)) {
        session.user.email = email; // preserve lowercase email in session
        return session;
      } else {
        console.log('Unauthorized email:', email);

        return null; // Invalid session
      }
    },
    async signIn({ user, account, profile }) {
    const email = user?.email?.toLowerCase();
    const allowed = emails.includes(email);
    console.log('[SIGNIN CALLBACK] Email:', email, '| Allowed:', allowed);
    return allowed;
  }
   
  }
};

export default NextAuth(auth);

// For API route auth checks
export async function isAdminRequest(req, res) {
  const session = await getServerSession(req, res, auth);
  const email = session?.user?.email?.toLowerCase();

  if (!emails.includes(email)) {
    res.status(401).end();
    throw new Error('Not an admin');
  }
}

