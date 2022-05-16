import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Helpers/Context";

export default function LoginPage() {
    let navigate = useNavigate();
    let location:any = useLocation();
    let auth = useAuth();
    let from = location.state.from?.pathname || "/";
  
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      let formData = new FormData(event.currentTarget);
      let username = formData.get("username") as string;
      auth.signin(username, () => navigate(from, { replace: true }));
    }
    return (
      <div>
        <p>You must log in to view the page at {from}</p>
        <form onSubmit={handleSubmit}>
          <label>
            Username: <input type="text" name="username" />
          </label>{" "}
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }