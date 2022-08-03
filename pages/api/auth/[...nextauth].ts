import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, account, profile, isNewUser }) => {
      //for now this won't be used
      return token;
    },
    session: async ({ session, token }) => {
      //for now this won't be used
      return session;
    },
    //
    //
    signIn: async ({ user, account, profile, email, credentials }) => {
      return true;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 2, //2 days
  },
  pages: {
    signIn: "/?signIn",
    error: `/?error`,
    verifyRequest: "/?verifyrequest",
  },
};

export default NextAuth(authOptions);
