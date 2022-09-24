import { Button, Col, Row } from "react-bootstrap";
import React, { useEffect, useRef, useState } from "react";
import Classes from "./home.module.css";
import ticketIcon from "../figma/ticket1.png";
import hotelIcon from "../figma/hotel1.png";
import pplaneIcon from "../figma/pplane1.png";
import chartIcon from "../figma/chart.png";
import calendarIcon from "../figma/calendar.png";
import mapIcon from "../figma/map.png";
import historyIcon from "../figma/history.png";
import cheveronRightIcon from "../figma/chevron-right.svg";
import thailandPic from "../figma/cardtailand.png";
import indonisiaPic from "../figma/cardindonisia.png";
import zealandPic from "../figma/cardnewzealand.png";
import BestPackages from "../components/bestPackages";
import carIcon from "../figma/taxi.png";
import chooseDestinationIcon from "../figma/choosedestination.png";
import makePaymentIcon from "../figma/makepayment.png";

import leafIcon from "../figma/leaf.png";
import paperMapIcon from "../figma/mappaper.png";
import sendIcon from "../figma/send.png";
import buildingIcon from "../figma/building.png";
import heartIcon from "../figma/heart.png";
import greecePic from "../figma/triptogreece.jpg";
import romePic from "../figma/triptorome.png";
import PeopleOpinion from "../components/peopleOpinion";

export default function Home() {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY === 0) return;
        if (e.deltaY > 0 && el.scrollLeft === 1840) return;
        if (e.deltaY < 0 && el.scrollLeft === 0) return;
        e.preventDefault();
        if (e.deltaY > 0)
          el.scrollTo({
            left: el.scrollLeft + 1000,
            behavior: "smooth",
          });
        else {
          el.scrollTo({
            left: el.scrollLeft - 1000,
            behavior: "smooth",
          });
        }
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);

  let [preFilterPackage, setPreFilterPackage] = useState("Hot deals");
  const filterPackageFunc = (e) => {
    if (
      e.target.tagName !== "BUTTON" ||
      e.target.textContent === preFilterPackage
    )
      return;
    document
      .querySelector(".home_selectedbestPackBtn__qs6q4")
      ?.classList.add("btn-secondary");
    document
      .querySelector(".home_selectedbestPackBtn__qs6q4")
      ?.classList.remove("home_selectedbestPackBtn__qs6q4");
    e.target?.classList.remove("btn-secondary");
    e.target?.classList.add("home_selectedbestPackBtn__qs6q4");
    setPreFilterPackage(e.target.textContent);
  };
  return (
    <div className={Classes.mainContent}>
      <div className={Classes.mainView}>
        <div>
          <h1> Your Imagination Is Your Only Limit</h1>
          <p>
            We always try to make our customer Happy. We provide all kind of
            facilities. Your Satisfaction is our main priority
          </p>
          <Button variant="success">Discover more</Button>
        </div>
      </div>
      <h1 style={{ margin: "90px 0" }}>Our Services</h1>
      <Row className={Classes.ourServiceContainer}>
        <Col xl={3.5} lg={4} md={5}>
          <div className="cards">
            <img src={ticketIcon} alt="..." height="28px" />
            <h3>Ticket Booking</h3>
            <p>
              We book all kind of national or international ticket for your
              destinaion.
            </p>
          </div>
        </Col>
        <Col xl={3.5} lg={4} md={5}>
          <div className="cards">
            <img src={hotelIcon} alt="..." height="28px" />
            <h3>Hotel Booking</h3>
            <p>
              You can easily book your according to your budget hotel by our
              website.
            </p>
          </div>
        </Col>
        <Col xl={3.5} lg={4} md={5}>
          <div className="cards">
            <img src={pplaneIcon} alt="..." height="28px" />
            <h3> Tour Plan</h3>
            <p>
              We provide you the best plan within a short time explore more.
            </p>
          </div>
        </Col>
      </Row>
      <div className={Classes.statsContainer}>
        <h1 style={{ margin: "10px auto", maxWidth: "500px" }}>
          We always try to give you the best service
        </h1>
        <p>
          We always try to make our customer Happy. We provide all kind of
          facilities. Your Satisfaction is our main priority.
        </p>
        <div className={Classes.stats}>
          <div>
            <img src={calendarIcon} alt="" />
            <h3>15+</h3>
            <p> Years of experience</p>
          </div>
          <div>
            <img src={chartIcon} alt="" />
            <h3>15K+</h3>
            <p> Happy travellers</p>
          </div>
          <div>
            <img src={mapIcon} alt="" />
            <h3>650+</h3>
            <p>Places visited</p>
          </div>
          <div>
            <img src={historyIcon} alt="" />
            <h3>2K+</h3>
            <p>Travel history</p>
          </div>
        </div>
      </div>
      <h1 style={{ margin: "90px auto 10px auto", maxWidth: "500px" }}>
        Our Popular Distinations
      </h1>
      <div className={Classes.popularDistinationsContainer}>
        <div className={Classes.map}>
          <div className={Classes.first}></div>
          <div className={Classes.second}></div>
          <div className={Classes.third}></div>
        </div>
        <div className={Classes.popularDistinations}>
          <div>
            <img src={thailandPic} alt="" />
            <h4>Thailand</h4>
            <h4>20+ spots 2D & 3N</h4>
            <img src={cheveronRightIcon} alt="" />
          </div>
          <div>
            <img src={indonisiaPic} alt="" />
            <h4>Indonesia</h4>
            <h4>25+ Spots 3D & 3N</h4>
            <img src={cheveronRightIcon} alt="" />
          </div>
          <div>
            <img src={zealandPic} alt="" />
            <h4>New Zeland</h4>
            <h4>20+ Spots 3D & 2N</h4>
            <img src={cheveronRightIcon} alt="" />
          </div>
        </div>
      </div>
      <div className={Classes.bestPackagesContainer}>
        <h1 style={{ margin: "10px auto", maxWidth: "500px" }}>
          Best Packages For You
        </h1>
        <div className={Classes.packagePick} onClick={filterPackageFunc}>
          <Button variant="" className={Classes.selectedbestPackBtn}>
            Hot deals
          </Button>
          <Button variant="secondary">Backpack</Button>
          <Button variant="secondary">South asia</Button>
          <Button variant="secondary">Honeymoon</Button>
          <Button variant="secondary">Europe</Button>
          <Button variant="secondary">More</Button>
        </div>
        <BestPackages filter={preFilterPackage} />
        <Button variant="" className={Classes.selectedbestPackBtn}>
          Hot deals
        </Button>
      </div>
      <div className={Classes.yourNextTripContainer}>
        <h1 style={{ margin: "50px auto 0 auto" }}>
          Book Your Next Trip in 3 Easy Steps
        </h1>
        <h5 style={{ fontWeight: "300", margin: "0 auto 50px auto" }}>
          Easy and fast
        </h5>
        <div>
          <div>
            <div className={Classes.horizentalCard}>
              <img
                src={chooseDestinationIcon}
                alt=""
                style={{ backgroundColor: "#F0BB1F" }}
              />
              <div>
                <h4>Choose Destinaion</h4>
                <p>
                  Laboris culpa commodo tempor dolore eiusmod aute officia
                  dolore consectetur sint.
                </p>
              </div>
            </div>
            <div className={Classes.horizentalCard}>
              <img
                src={makePaymentIcon}
                alt=""
                style={{ backgroundColor: "#F15A2B" }}
              />
              <div>
                <h4>Choose Destinaion</h4>
                <p>
                  Laboris culpa commodo tempor dolore eiusmod aute officia
                  dolore consectetur sint.
                </p>
              </div>
            </div>
            <div className={Classes.horizentalCard}>
              <img
                src={carIcon}
                alt=""
                style={{ backgroundColor: "#006380" }}
              />
              <div>
                <h4>Choose Destinaion</h4>
                <p>
                  Laboris culpa commodo tempor dolore eiusmod aute officia
                  dolore consectetur sint.
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "no-wrap",
              alignItems: "center",
            }}
          >
            <div className={Classes.verticalCard}>
              <img src={greecePic} alt="" />
              <h3>Trip To Greece</h3>
              <p>14-29 June| by Robbin john Doe</p>
              <div
                className={Classes.divi1}
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  padding: "5px",
                  alignItems: "center",
                  fontSize: "14px",
                  margin: 0,
                }}
              >
                <img src={leafIcon} alt="" />
                <img src={paperMapIcon} alt="" />
                <img src={sendIcon} alt="" />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  padding: "10px",
                  alignItems: "center",
                  fontSize: "14px",
                  margin: 0,
                }}
              >
                <img src={buildingIcon} alt="" />
                <p style={{ margin: "0 auto 0 0" }}>24 people going</p>
                <img src={heartIcon} alt="" />
              </div>
            </div>
            <div className={Classes.sticker}>
              <img src={romePic} alt="" />
              <div>
                <span>Ongoing</span>
                <h5>Trip To Rome</h5>
                <p>
                  <span>40%</span> completed
                </p>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 style={{ margin: "60px auto" }}>What people say about us</h1>
      <div className={Classes.peopleOpinions} ref={elRef}>
        <PeopleOpinion />
      </div>
      <div className={Classes.subContainer}>
        <div>
          <div>
            <img src={sendIcon} alt="" width="20px" />
          </div>
          <p>
            Subscribe to get information, latest news and other interesting
            offers about Cobham
          </p>
          <form>
            <img src={sendIcon} alt="" />
            <input placeholder="name@example.com" />
            <button onClick={(e) => e.preventDefault()}>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}
