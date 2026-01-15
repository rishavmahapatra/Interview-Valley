// src/layouts/MainLayout.jsx
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout({onLogout, user, authenticated}) {
  return (
    <>
      <Navbar onLogout={onLogout} user={user} authenticated={authenticated}/>
      <div className="pt-16">
        <Outlet />
      </div>
    </>
  );
}
