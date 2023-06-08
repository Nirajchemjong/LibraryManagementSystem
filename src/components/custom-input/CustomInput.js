import React from "react";
import { Form } from "react-bootstrap";

export const CustomInput = ({ lable, ...rest }) => {
  return (
    <div>
      <Form.Group className='mb-3'>
        <Form.Label>{lable}</Form.Label>
        <Form.Control {...rest} />
      </Form.Group>
    </div>
  );
};
