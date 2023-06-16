import React, { useEffect, useState } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { Form, Button, Container } from "react-bootstrap";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  updateBookAction,
  getBookAction,
  getAllBookAction,
} from "./BookAction";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { toast } from "react-toastify";

export const EditBook = () => {
  const { id } = useParams();
  const [form, setForm] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { SelectedBook } = useSelector((state) => state.bookInfo); //working on edit button
  // console.log(id, SelectedBook);
  // dispatch(getBookAction(id));
  useEffect(() => {
    //calling action to fetch selected book based on id
    SelectedBook.id !== id && dispatch(getBookAction(id));
    setForm(SelectedBook);
  }, [dispatch, id, SelectedBook, form.id]);
  //

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    console.log(value);
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnDelete = async () => {
    try {
      if (window.confirm("Are you sure you want to delete this book?")) {
        await deleteDoc(doc(db, "books", id));

        toast.success("The book has been delete.");
        dispatch(getAllBookAction());
        navigate("/books");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(updateBookAction(form));
  };

  const inputs = [
    {
      lable: "Book Title",
      name: "Title",
      type: "text",
      placeholder: "Title",
      required: true,
      value: form.Title,
    },
    {
      lable: "Author name",
      name: "name",
      type: "text",
      placeholder: "Niraj chemjong",
      required: true,
      value: form.name,
    },
    {
      lable: "Published Year",
      name: "year",
      type: "number",
      placeholder: "1244",
      value: form.year,
    },
    {
      lable: "Imge url",
      name: "Url",
      type: "url",
      placeholder: "Url",
      required: true,
      value: form.Url,
    },
    {
      lable: "Summary",
      name: "Summary",
      type: "text",
      placeholder: " hello summary ",
      required: true,
      value: form.Summary,
    },
  ];
  return (
    <UserLayout>
      <div className='mt-5 d-flex justify-content-between'>
        <h3 className='mt-2 ms-2'>Books</h3>
        <Link to='/books'>
          <Button varient='secondary'>&lt; Back</Button>
        </Link>
      </div>
      <hr />
      <Container>
        <Form onSubmit={handleOnSubmit}>
          <h1>Updating Books</h1>
          <hr />
          {inputs.map((item, i) => (
            <CustomInput
              {...item}
              onChange={handleOnChange}
            />
          ))}

          <p className='d-grid mt-3'>
            <Button
              variant='dark'
              type='submit'
            >
              Update Book
            </Button>
          </p>
        </Form>
        <Button
          variant='danger'
          type='submit'
          onClick={handleOnDelete}
          className='my-2'
        >
          Delete Book
        </Button>
      </Container>
    </UserLayout>
  );
};
