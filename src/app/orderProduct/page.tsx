"use client";

import { useRouter } from "next/navigation";
import React from "react";

function OrderProduct() {
  const router = useRouter();
  return (
    <div>
      <h1>Order Product</h1>
      <button
        onClick={() => {
          console.log(`Placing your order 🛒`);
          router.push("/");
        }}>
        Place Order
      </button>
    </div>
  );
}

export default OrderProduct;
