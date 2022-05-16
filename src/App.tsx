import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./App.css";
import { AuthProvider, AuthStatus, RequireAuth } from "./Helpers/Auth";
import PublicPage from "./Pages/Public";
import LoginPage from "./Pages/Login";
import ProtectedPage from "./Pages/Protected";

function Layout() {
  return (
    <div>
      <AuthStatus />
      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
export default function App() {
  return (
    <AuthProvider>
      <h1>Auth</h1>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
