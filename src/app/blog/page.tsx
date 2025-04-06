import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: {
    absolute: "Blog Page",
  },
};

async function page() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Intentional delay of 2 seconds ⌛");
    }, 2000); // Simulate asynchronous API call
  });
  return (
    <>
      <h1>Blog Page</h1>
      <Link href="/">Back Home 🏠</Link>
    </>
  );
}

export default page;
