import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  //! Solution 1️⃣
  // const reqHeaders = new Headers(request.headers)
  // console.log(reqHeaders.get('Authorization'))

  //! headers() - This function allows us to read the HTTP incoming request headers in Server Components, Server Actions, Route Handlers and Middleware.

  //! Solution 2️⃣
  const headerList = await headers();
  console.log(headerList.get("Authorization"));
  //return new Response("Profile API DATA ✅"); //plain text
  return new Response("<h1>Profile API OutGoing DATA</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}

//Remember: Incoming headers - Readonly
