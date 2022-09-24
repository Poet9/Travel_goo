import { Carousel } from "react-bootstrap";
import React, { useContext } from "react";
import { Context } from "../features/store";

export default function About() {
  const [state] = useContext(Context);
  return (
    <>
      <Carousel variant="light">
        <Carousel.Item
          style={{
            height: "100vh",
            minHeight: "750px",
            overflow: "hidden",
          }}
        >
          <img
            className="d-block w-100"
            src={state.More && state.More[0]}
            alt="First slide"
          />
          <Carousel.Caption
            style={{
              backgroundColor: "#3335",
              background: "blur(0.5)",
              color: "#fff",
            }}
          >
            <h1>Admire the beauty of our destinations </h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          style={{
            height: "100vh",
            minHeight: "750px",
            overflow: "hidden",
          }}
        >
          <img
            className="d-block w-100"
            src={state.More && state.More[1]}
            alt="Second slide"
          />
          <Carousel.Caption
            style={{
              backgroundColor: "#3335",
              background: "blur(0.5)",
              color: "#fff",
            }}
          >
            <h1>Admire the beauty of our destinations </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          style={{
            height: "100vh",
            minHeight: "750px",
            overflow: "hidden",
          }}
        >
          <img
            className="d-block w-100"
            src={state.More && state.More[2]}
            alt="Third slide"
          />
          <Carousel.Caption
            style={{
              backgroundColor: "#3335",
              background: "blur(0.5)",
              color: "#fff",
            }}
          >
            <h1>Admire the beauty of our destinations </h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
