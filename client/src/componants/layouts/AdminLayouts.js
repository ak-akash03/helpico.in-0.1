import React from "react";
import { NavLink, Outlet } from "react-router-dom";



function AdminLayouts() {
  return (
    <>
      <header>
        <div className="adminContainer container">
          <nav className="adminNav">
            <ul className="adminList">
              <li>
                <NavLink to={"/admin/users"}>Users</NavLink>
              </li>
              <li>
                <NavLink to={"/admin/contacts"}>Contacts</NavLink>
              </li>
              <li>
                <NavLink to={"/admin/services"}>Services</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default AdminLayouts;
