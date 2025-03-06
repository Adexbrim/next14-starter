import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});


// // auth.ts
// import NextAuth from "next-auth"
// import GitHub from "next-auth/providers/github"

// export const {
//   handlers: { GET, POST },
//   auth,
//   signIn,
//   signOut,
// } = NextAuth({
//   providers: [
//     GitHub({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//   ],
// })

//   pages: {
//     signIn: "/auth/signin",
//   },
//   callbacks: {
//     async jwt(token, user) {
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },
//     async session(session, token) {
//       session.id = token.id;
//       return session;
//     },
//   },