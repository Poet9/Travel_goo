import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Context } from "../features/store";
import positionIcon from "../figma/map.png";
export default function BestPackages(props) {
  const [state] = useContext(Context);
  const [images, setImages] = useState([]);
  useEffect(() => {
    if (props.filter === "Hot deals") setImages(state.More);
    else setImages(state[props.filter]);
  }, [props.filter]);
  return (
    <Row
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        textAlign: "left",
        padding: "50px 0",
      }}
    >
      <Col xl={3} lg={5} md={8}>
        <Card style={{ width: "90%" }}>
          <Card.Img
            variant="top"
            src={images && images[0]}
            style={{ height: "300px" }}
          />
          <Card.Body>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "20px",
                fontWeight: "300",
              }}
            >
              <p>3 Days, 2 Nights</p>
              <p>$500 / Person</p>
            </div>
            <Card.Text>
              Enjoy the Shrimes and blossoms here in this beautiful country
            </Card.Text>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              <p>
                <img src={positionIcon} alt="" height="20px" /> {props.filter}
              </p>
              <p>Know more</p>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={3} lg={5} md={8}>
        <Card style={{ width: "90%" }}>
          <Card.Img
            variant="top"
            src={images && images[1]}
            style={{ height: "300px" }}
          />
          <Card.Body>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "20px",
                fontWeight: "300",
              }}
            >
              <p>3 Days, 2 Nights</p>
              <p>$800 / Person</p>
            </div>
            <Card.Text>
              Enjoy the Shrimes and blossoms here in this beautiful country
            </Card.Text>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              <p>
                <img src={positionIcon} alt="" height="20px" /> {props.filter}
              </p>
              <p>Know more</p>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={3} lg={5} md={8}>
        <Card style={{ width: "90%" }}>
          <Card.Img
            variant="top"
            src={images && images[2]}
            style={{ height: "300px" }}
          />
          <Card.Body>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "20px",
                fontWeight: "300",
              }}
            >
              <p>3 Days, 2 Nights</p>
              <p>$600 / Person</p>
            </div>
            <Card.Text>
              Enjoy the Shrimes and blossoms here in this beautiful country
            </Card.Text>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              <p>
                <img src={positionIcon} alt="" height="20px" /> {props.filter}
              </p>
              <p>Know more</p>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
