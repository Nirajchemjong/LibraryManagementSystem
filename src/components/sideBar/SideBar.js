import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const SideBar = () => {
  const { admin } = useSelector((state) => state.adminInfo);
  const name = admin.fName.toUpperCase(); //geting user name
  return (
    <div
      className=' bg-dark text-light '
      style={{ width: "150px" }}
    >
      <div className='top text-center mt-5'>
        Hi! {name} <br />
      </div>
      <div>
        <ul
          className='list-unstyled mx-4 mt-3  text-center'
          style={{ height: "17rem" }}
        >
          {admin?.role === "admin" ? (
            <>
              <li>
                <Link
                  to='/books'
                  className='nav-link'
                >
                  Books
                </Link>
              </li>
              <li>
                <Link
                  to='/clients'
                  className='nav-link'
                >
                  Students
                </Link>
              </li>
              <li>
                <Link
                  to='/admin-signup'
                  className='nav-link'
                >
                  Add Admin
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to='/dashboard'
                  className='nav-link'
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to='/'
                  className='nav-link'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/history'
                  className='nav-link'
                >
                  History
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
