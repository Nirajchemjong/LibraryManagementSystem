import React, { useEffect, useState } from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { Button } from "react-bootstrap";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../config/firebase-config";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { getUserAction } from "../user/userAction";
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const { admin } = useSelector((state) => state.adminInfo);

  useEffect(() => {
    admin?.uid && navigate("/dashboard");
  }, [admin, navigate]);

  const handleOnChanged = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, password, ...rest } = form;
    if (password !== confirmPassword) {
      return toast.error("password do not match");
    }
    // console.log(e);

    try {
      //use firebase to create user and store user

      const authSnapPromise = createUserWithEmailAndPassword(
        auth,
        form.email,
        password
      );
      toast.promise(authSnapPromise, {
        pending: "please wait..",
      });
      const authSnap = await authSnapPromise;
      console.log(authSnap);
      if (authSnap?.user.uid) {
        //add user in the user table
        await setDoc(doc(db, "users", authSnap?.user.uid), rest);
        toast.success("New user has been created");

        dispatch(getUserAction(authSnap?.user.uid));
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
      let msg = error.message;
      if (msg.includes("auth/email-already-in-use")) {
        msg = " There is already user exist with this email";
      }
      toast.error(msg);
    }
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
      minLength: 6,
    },
    {
      lable: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "***********",
      required: true,
    },
  ];
  //   console.log(form);

  return (
    <DefaultLayout>
      <div className='admin-form border p-3'>
        <Form onSubmit={handleOnSubmit}>
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
