import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const SideBar = () => {
  const { admin } = useSelector((state) => state.adminInfo);
  return (
    <div
      className=' bg-dark text-light '
      style={{ width: "150px" }}
    >
      <div className='top text-center mt-5'>{admin.role} Account</div>
      <div>
        <ul
          className='list-unstyled mx-4 mt-3 d-grid text-center'
          style={{ height: "17rem" }}
        >
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
              Clients
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

          <li>
            <Link
              to='/admin-signup'
              className='nav-link'
            >
              Add Admin
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
