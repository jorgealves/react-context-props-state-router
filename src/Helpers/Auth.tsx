import React from "react";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { AuthContext, useAuth } from "./Context";

export function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome {auth.user}!{" "}
      <button
        onClick={() => {
          auth.signout(() => navigate("/"));
        }}
      >
        Sign out
      </button>
    </p>
  );
}

export function AuthProvider({ children }: any) {
  let [user, setUser] = React.useState<any>(null);
  let signin = (newUser: string, callback: VoidFunction) => {
    setUser(newUser);
    callback();
  };
  let signout = (callback: VoidFunction) => {
    setUser(null);
    callback();
  };
  let value = { user, signin, signout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
