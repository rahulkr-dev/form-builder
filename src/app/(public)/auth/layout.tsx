import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-200">
      <div className="bg-blue-500 py-4 ">Auth Layout</div>
      {children}
    </div>
  );
};

export default AuthLayout;
