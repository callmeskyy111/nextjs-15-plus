"use client";

import { useRouter } from "next/navigation";
import React, { startTransition } from "react";

function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  function reload() {
    startTransition(() => {
      router.refresh();
      reset();
    });
  }
  return (
    <div>
      <h3>Err. message: {error.message}⚠️</h3>
      <button onClick={() => reload()}>Reset</button>
    </div>
  );
}

export default ErrorBoundary;
