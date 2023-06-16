import React, { useEffect, useState } from "react";
import { Button, Table, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllBookAction } from "../../pages/book/BookAction";

export const BookTable = () => {
  const dispatch = useDispatch();
  const [displayList, setDisplayList] = useState([]);
  const { BookList } = useSelector((state) => state.bookInfo);

  useEffect(() => {
    !BookList.length && dispatch(getAllBookAction());
    setDisplayList(BookList);
  }, [BookList, dispatch]);

  const handleOnSearch = (e) => {
    const { value } = e.target;
    const filteredBook = BookList.filter((item) =>
      item.Title.toLowerCase().includes(value.toLowerCase())
    );
    setDisplayList(filteredBook);
  };

  return (
    <div className='mt-3 text-end'>
      <Form.Control
        onChange={handleOnSearch}
        className='user-control'
        placeholder='search book by name'
      ></Form.Control>
      <Table
        striped
        bordered
        hover
        className='mt-3'
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Thumbnail</th>
            <th>Name</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {displayList.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>
                <img
                  src={item.Url}
                  alt='not found'
                  style={{ height: "14rem", width: "14rem" }}
                />
              </td>
              <td>
                <h3>{item.name}</h3>
                <p>
                  {item.Title} {item.year}
                </p>
                <p>{item.Summary}</p>
              </td>
              <td>
                <Link to={`/edit-book/${item.id}`}>
                  <Button variant='warning'>Edit</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
