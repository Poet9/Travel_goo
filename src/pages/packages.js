import React, { useContext } from "react";
import Classes from "./packages.module.css";
import { Context } from "../features/store";
export default function Packages() {
  const [state] = useContext(Context);
  const chosedFunc = (param) => {
    alert(`This site is just a template there is no trip to ${param}`);
  };
  return (
    <div className={Classes.mainPackageContainer}>
      <div className={Classes.darker}>
        <h1>Get a trip to the heart of nature</h1>
        <p>
          Clear your mind and go away from the overwhelming constantly moving
          daily life and take a pause to enjoy nature.
        </p>
        <div className={Classes.scrollHorizental}>
          <div>
            <img src={state.Backpack && state.Backpack[0]} alt="" />
            <h4>First destination</h4>
          </div>
          <div>
            <img src={state.Backpack && state.Backpack[2]} alt="" />
            <h4>Second destination</h4>
          </div>
          <div>
            <img src={state.Backpack && state.Backpack[1]} alt="" />
            <h4>Third destination</h4>
          </div>
        </div>
        <div className={Classes.priceContainer}>
          <h5>A week in nature</h5>
          <p>300$ / Person + Flight price</p>
          <button
            onClick={() => {
              chosedFunc("hold on");
            }}
          >
            Make a reservation
          </button>
        </div>
      </div>
      <div>
        <h1 style={{ marginTop: "90px" }}>Visit three European cities</h1>
        <p>Discover different cultures and different architectures.</p>
        <div className={Classes.scrollHorizental}>
          <div>
            <img src={state.Europe && state.Europe[0]} alt="" />
            <h4>First destination</h4>
          </div>
          <div>
            <img src={state.Europe && state.Europe[1]} alt="" />
            <h4>Second destination</h4>
          </div>
          <div>
            <img src={state.Europe && state.Europe[2]} alt="" />
            <h4>Third destination</h4>
          </div>
        </div>
        <div className={Classes.priceContainer}>
          <h5>A week in south asia</h5>
          <p>1200$ / Person</p>
          <button
            onClick={() => {
              chosedFunc("Asia");
            }}
          >
            Make a reservation
          </button>
        </div>
      </div>
      <div className={Classes.darker}>
        <h1>Go to asia</h1>
        <p>
          Learn new languages and try different food each day while meeting with
          new people and
        </p>
        <div className={Classes.scrollHorizental}>
          <div>
            <img src={state["South asia"] && state["South asia"][0]} alt="" />
            <h4>First destination</h4>
          </div>
          <div>
            <img src={state["South asia"] && state["South asia"][2]} alt="" />
            <h4>Second destination</h4>
          </div>
          <div>
            <img src={state["South asia"] && state["South asia"][1]} alt="" />
            <h4>Third destination</h4>
          </div>
        </div>
        <div className={Classes.priceContainer}>
          <h5>A week in nature</h5>
          <p>900$ / Person</p>
          <button
            onClick={() => {
              chosedFunc("south asia");
            }}
          >
            Make a reservation
          </button>
        </div>
      </div>
    </div>
  );
}
