import React, { useState } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { useDispatch } from "react-redux";
import addNewBookAction from "../book/BookAction";

export const NewBook = () => {
  const [AddBook, SetAddBook] = useState({});
  const dispatch = useDispatch();

  const books = [
    {
      lable: "Book Title",
      name: "Title",
      type: "text",
      placeholder: "JavaScript",
      required: true,
    },
    {
      lable: "Authur Name",
      name: "name",
      type: "text",
      placeholder: "Niraj",
      required: true,
    },
    {
      lable: "Published Year",
      name: "year",
      type: "number",
      placeholder: "2029",
    },
    {
      lable: "Image Url",
      name: "Url",
      type: "url",
      placeholder: "https://abc.com",
      required: true,
    },
    {
      lable: "Summary",
      name: "Summary",
      type: "text",
      placeholder: "Please write you summary for this books",
      required: true,
    },
  ];

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    SetAddBook({
      ...AddBook,
      [name]: value,
    });
  };
  //   console.log(AddBook);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // dispatch(AddBook);
    dispatch(addNewBookAction(AddBook));
  };
  return (
    <UserLayout>
      <Container>
        <div className='mt-5 d-flex justify-content-between'>
          <h3 className=' ms-2'>Add New Books</h3>

          <Link to='/books'>
            <Button varient='secondary'> Back</Button>
          </Link>
        </div>
        <hr />
        <Form onSubmit={handleOnSubmit}>
          {books.map((item) => (
            <CustomInput
              {...item}
              onChange={handleOnChange}
            ></CustomInput>
          ))}
          <p className='d-grid mt-3'>
            <Button
              variant='dark'
              type='submit'
            >
              + Add Book
            </Button>
          </p>
        </Form>
      </Container>

      {/* <Form></Form> */}
    </UserLayout>
  );
};
