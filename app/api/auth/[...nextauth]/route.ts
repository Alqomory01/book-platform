import NextAuth from "next-auth";

const handler = NextAuth({
  providers: [
    {
      id: "dummy",
      name: "Dummy",
      type: "credentials",
      credentials: {},
      async authorize() {
      
        return {
          id: "1",
          name: "Alqomory",
          email: "info@gmail.com",
          image: "/profilegirl.png",
        };
      },
    },
  ],
  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };