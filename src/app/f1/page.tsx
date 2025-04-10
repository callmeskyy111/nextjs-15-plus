import Link from "next/link";
import React from "react";

function F1() {
  return (
    <>
      <h1>F1 Page</h1>
      <div>
        <Link href="/f1/f2">To F2</Link>
        <br/>
        <Link href="/f3">To outer F3</Link>
      </div>
    </>
  );
}

export default F1;
