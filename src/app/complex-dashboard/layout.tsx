import React, { use } from "react";
// import Login from "./@login/page";
// import UserAnalytics from "path/to/UserAnalytics";
// import RevenueMetrics from "path/to/RevenueMetrics";
// import Notifications from "path/to/Notifications";

function ComplexDashBoardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode; // Add a boolean prop to check if user is logged in or not.
}) {
  const isLoggedIn = true;
  return isLoggedIn ? (
    <div>
      <div>{children}</div> {/*Content from pages.tsx */}
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: "1" }}>{notifications}</div>
      </div>
    </div>
  ) : (
    login
  );
}

export default ComplexDashBoardLayout;
