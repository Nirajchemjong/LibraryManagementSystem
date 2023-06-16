import Carousel from "react-bootstrap/Carousel";
import a from "../../assets/img/a.jpg";
import b from "../../assets/img/b.jpg";
import c from "../../assets/img/c.jpg";

export const Carouels = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={a}
          alt='First slide'
          style={{ height: "70dvh" }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={b}
          className='d-block w-100'
          alt='Second slide'
          ß
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={c}
          alt='Third slide'
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
