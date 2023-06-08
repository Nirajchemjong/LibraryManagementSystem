import React, { useState } from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { Button } from "react-bootstrap";
const Signup = () => {
  const [form, setForm] = useState({});

  const handleOnChanged = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setForm({
      ...form,
      [name]: value,
    });
  };
  const inputs = [
    {
      lable: "First name",
      name: "fName",
      type: "text",
      placeholder: "Niraj",
      required: true,
    },

    {
      lable: "Last Name",
      name: "lName",
      type: "text",
      placeholder: " chemjong",
      required: true,
    },

    {
      lable: "Phone",
      name: "phone",
      type: "number",
      placeholder: "+61*********",
      required: true,
    },
    {
      lable: "Email",
      name: "email",
      type: "email",
      placeholder: "abc@gmail.com",
      required: true,
    },
    {
      lable: "Password",
      name: "password",
      type: "password",
      placeholder: "**********",
      required: true,
    },
    {
      lable: "Confirm Password",
      name: "password",
      type: "password",
      placeholder: "***********",
      required: true,
    },
  ];
  console.log(form);

  return (
    <DefaultLayout>
      <div className='admin-form border p-3'>
        <Form>
          <h1>Admin Registration </h1>

          {inputs.map((item) => (
            <CustomInput
              {...item}
              onChange={handleOnChanged}
            />
          ))}
          <p className='d-grid'>
            <Button
              variant='dark'
              type='submit'
            >
              Submit
            </Button>
          </p>

          {/* 
          <CustomInput
            type={"email"}
            lable={"Email"}
            placeholder={"Your Email"}
          />

          <CustomInput
            type={"Password"}
            lable={"Password"}
            placeholder={"Your Password"}
          />
          <CustomInput
            type={"checkbox"}
            lable={"Check me out"}
          />
          <Form.Group
            className='mb-3'
            controlId='formBasicCheckbox'
          >
            <Form.Check
              type='checkbox'
              label='Check me out'
            />
          </Form.Group>
          <Button
            variant='primary'
            type='submit'
          >
            Submit
          </Button> */}
        </Form>
      </div>
    </DefaultLayout>
  );
};

export default Signup;
