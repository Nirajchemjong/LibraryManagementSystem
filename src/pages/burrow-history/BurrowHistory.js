import React, { useEffect } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { getAllBurrowHistory, updateBurrowHistoryAction } from "./BurrowAction";
import { updateBookAction } from "../book/BookAction";

export const BurrowHistory = () => {
  const { burrowHistoryList } = useSelector((state) => state.burrowHistories);
  const dispatch = useDispatch();
  const { admin } = useSelector((state) => state.adminInfo);
  useEffect(() => {
    !burrowHistoryList.length && dispatch(getAllBurrowHistory(admin.uid));
  }, [dispatch, burrowHistoryList, admin.uid]);
  const handleOnBookReturn = ({ id, BookID }) => {
    //burrow hist table: isReturn: true, returnAt:
    const burrowUpdateObj = {
      id,
      isReturn: true,
      availableForm: Date.now(),
    };

    dispatch(updateBurrowHistoryAction(burrowUpdateObj));
    //book table: isAvailable:true, availableForm to be update
    const BookUpdateObj = {
      id: BookID,
      isAvailable: true,
      availableForm: Date.now(),
    };
    dispatch(updateBookAction(BookUpdateObj));
  };
  return (
    <UserLayout>
      <h3>History</h3>
      <hr />
      <Table
        striped
        bordered
        hover
      >
        <thead>
          <th>Thumbnail</th>
          <th>Book Details</th>
          <th>Burrowed At</th>
          <th>Return Date</th>
          <th>Action</th>
        </thead>
        <tbody>
          {burrowHistoryList.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  src={item.Url}
                  height={"300px"}
                  width={"300px"}
                  style={{ objectFit: "center" }}
                  //   height={"90rem"}
                  alt='Img not found'
                  srcset=''
                />
              </td>
              <td>
                <h3>{item.Title}</h3>
              </td>
              <td>{new Date(item.burrowedAt).toDateString()}</td>
              <td>{new Date(item.availableForm).toDateString()}</td>
              <td>
                {item.isReturn ? (
                  <Button variant='dark'>Returned</Button>
                ) : (
                  <Button
                    variant='dark'
                    onClick={handleOnBookReturn(item)}
                  >
                    Return Back
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </UserLayout>
  );
};
