import React, { useEffect, useState } from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../user/userAction";

const Login = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const { admin } = useSelector((state) => state.adminInfo);
  useEffect(() => {
    admin?.uid && navigate("/dashboard");
  }, [admin, navigate]);
  const loginData = [
    {
      lable: "Email",
      name: "email",
      type: "email",
      placeholder: "Email",
      required: true,
    },
    {
      lable: "Password",
      name: "password",
      type: "password",
      placeholder: "*********",
      required: true,
      minLength: 6,
    },
  ];
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = form;
      const signinPromise = signInWithEmailAndPassword(auth, email, password);
      toast.promise(signinPromise, {
        pending: "please wait...",
      });
      await signinPromise.then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user.uid) {
          toast.success(`congrats! You're logged in Succesfully`);
          navigate("/dashboard");
          dispatch(getUserAction(user?.uid));
        }
        // console.log(signIn);
        // if (signIn?.user.uid === user?.uid) {
        //
        // }
        // ...
      });
    } catch (error) {
      const msg = error.message;
      if (msg.includes("Firebase: Error (auth/wrong-password).")) {
        toast.error("Please try again! your password didn't match!");
      }
    }
  };

  return (
    <DefaultLayout>
      <div className='login_layout'>
        <Form onSubmit={handleOnSubmit}>
          <h1 className='mt-5 text-center'>Welcome To Library</h1>
          <div className='login '>
            {loginData.map((item) => (
              <CustomInput
                // key={item.uid}
                {...item}
                onChange={handleOnChange}
                // className='w-3'
              />
            ))}

            <Button
              variant='dark'
              type='submit'
            >
              Sign In Now
            </Button>
          </div>
        </Form>
        <p className='text-end'>
          Forget Password ? <a href='/reset-password'>Reset</a> Password
        </p>
      </div>
    </DefaultLayout>
  );
};

export default Login;
