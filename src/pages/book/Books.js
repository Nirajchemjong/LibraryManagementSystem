import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BookTable } from "../../components/book/BookTable";
import { Link } from "react-router-dom";

const Books = () => {
  return (
    <UserLayout>
      <div className='text-center mt-2'>Books</div>
      <hr />
      <Container>
        {/* recent books */}
        <Row>
          <Col>
            <div className='d-flex justify-content-between'>
              <h5>Recent Books</h5>
              <Link to='/new-book'>
                <Button variant='primary'>+ Add new book</Button>
              </Link>
            </div>
          </Col>
        </Row>
        {/* table row  */}
        <BookTable />
      </Container>
    </UserLayout>
  );
};

export default Books;
