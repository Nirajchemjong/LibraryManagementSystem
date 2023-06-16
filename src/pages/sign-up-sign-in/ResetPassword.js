import React, { useRef } from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Button } from "react-bootstrap";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { toast } from "react-toastify";

export const ResetPassword = () => {
  const emailRef = useRef();

  const handleOnReset = () => {
    const { value } = emailRef.current;
    sendPasswordResetEmail(auth, value)
      .then(() => {
        toast.success("Reset link sent to your email");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <DefaultLayout>
      <div className='reset_layout '>
        <div className='reset_form text-center border mt-4 p-3 shadow-lg rounded'>
          <h2>Enter Your Email</h2>
          <input
            ref={emailRef}
            type='email'
            placeholder='Email'
            className='rounded-1 border p-2'
            required
          />
          <Button
            variant='dark mt-2'
            onClick={handleOnReset}
            // required
          >
            Reset
          </Button>
          <div className='text-center'>
            <a href='/login'> Log in</a>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
