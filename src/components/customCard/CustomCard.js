import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const CustomCard = ({ id, Title, name, year, Url }) => {
  return (
    <Link
      to={`/book/${id}`}
      className='Nav-Link'
    >
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant='top'
          src={Url}
          style={{ height: "18rem" }}
        />
        <Card.Body>
          <Card.Title>{Title}</Card.Title>
          <Card.Text>
            <p>
              {name} - {year}
            </p>
          </Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>
    </Link>
  );
};
