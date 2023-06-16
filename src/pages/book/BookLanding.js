import React from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import addNewBurrowAction from "../burrow-history/BurrowAction";

const forteenDaysInMs = 14 * 24 * 60 * 60 * 1000;
export const BookLanding = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { BookList } = useSelector((state) => state.bookInfo);
  const { admin } = useSelector((state) => state.adminInfo);
  const navigate = useNavigate();
  //   console.log(id, BookList);
  const selectedBOok = BookList.find((item) => item.id === id);
  //   console.log(selectedBOok);
  if (!selectedBOok) return navigate("/");
  const { Title, name, year, Url, Summary, isAvailable, availableForm } =
    selectedBOok;

  //working on user and book information trying to send required data to db

  const handleOnBurrow = () => {
    const obj = {
      Title,
      Url,
      BookID: id,
      userID: admin.uid,
      userName: admin.fName,
      burrowedAt: Date.now(),
      availableForm: Date.now() + forteenDaysInMs,
      //calculation is done for adding extra 14 days
    };
    dispatch(addNewBurrowAction(obj));
  };
  return (
    <DefaultLayout>
      <Container>
        <Row className='mt-4'>
          <Link to='/'>
            <Button variant='secondary'>&lt; Back</Button>
          </Link>
        </Row>
        <Row className='g-2'>
          <Col md={6}>
            <img
              src={Url}
              alt=''
              style={{ width: "20rem", height: "20rem", marginTop: "2rem" }}
            />
          </Col>
          <Col md={6}>
            <h1>{Title}</h1>
            <p>ratings</p>
            <p>
              {name} - {year}
            </p>
            <p>
              {!admin?.uid ? (
                <Link to='/login'>
                  <Button variant='dark'> Login To Burrow</Button>
                </Link>
              ) : isAvailable ? (
                <Button
                  variant='dark'
                  onClick={handleOnBurrow}
                >
                  Burrow Now
                </Button>
              ) : (
                <Button
                  variant='secondary'
                  disabled
                >
                  Available Form : {new Date(availableForm).toDateString()}
                </Button>
              )}
            </p>
            <p>
              <b>Summary : </b>
              {Summary}
            </p>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </DefaultLayout>
  );
};
