import React from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";

export const ResetPassword = () => {
  return (
    <DefaultLayout>
      <div className='reset_layout admin-form text-center border mt-4 p-3 shadow-lg rounded'>
        <p>
          <h2>
            Please Enter Your Email <br /> To Reset Your Password
          </h2>
        </p>
        <input
          type='text'
          placeholder='Email'
        />
        <p className='text-center d-grid'>
          <a href='/login'> Log in</a>
        </p>
      </div>
    </DefaultLayout>
  );
};
