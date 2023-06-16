import React from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";

import { Col, Container, Row } from "react-bootstrap";
import { CustomCard } from "../../components/customCard/CustomCard";
import { Carouels } from "../../components/carosuels/Carosuels";
import { useSelector } from "react-redux";
const Home = () => {
  const { BookList } = useSelector((state) => state.bookInfo);
  // console.log(BookList);

  return (
    <DefaultLayout>
      <Carouels />

      <Container>
        <Row>
          <Col>
            <h1 className='mt-5'>Available Books</h1>
            <hr />
          </Col>
        </Row>

        <Row>
          <Col className='d-flex justify-content-around flex-wrap gap-2 my-3'>
            {BookList.map((item) => (
              <CustomCard
                key={item.id}
                {...item}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default Home;
