import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <h1>Inner f2 page</h1>
      <div>
        <Link href="/f5">To f5</Link>
      </div>
    </>
  );
}

export default page;
