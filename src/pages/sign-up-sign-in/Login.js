import React from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { Button } from "react-bootstrap";

const Login = () => {
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
    },
  ];
  return (
    <DefaultLayout>
      <div className='login_layout'>
        <h1 className='mt-5 text-center'>Admin Login Only</h1>
        <div className='login '>
          {loginData.map((item) => (
            <CustomInput
              {...item}
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
      </div>
    </DefaultLayout>
  );
};

export default Login;
