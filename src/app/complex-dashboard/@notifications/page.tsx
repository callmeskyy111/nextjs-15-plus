import Link from "next/link";
import React from "react";

function Notifications() {
  return (
    <div>
      <h2>Notifications</h2>
      <div>
        <Link href="/complex-dashboard/archived">Archived</Link>
      </div>
    </div>
  );
}

export default Notifications;
