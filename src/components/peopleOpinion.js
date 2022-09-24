import React, { useEffect, useState, useContext } from "react";
import Classes from "./peopleOpinio.module.css";
import { Context } from "../features/store";

export default function PeopleOpinion() {
  const [profilPics, setProfilPics] = useState([]);
  /// reducer for exporting images to other components
  const [state] = useContext(Context);
  const coverPics = state.More;
  const callMyFunc = (query, callback) => {
    myfunc(query)
      .then((res) => {
        callback(res);
      })
      .catch((e) => console.log("check your network."));
  };
  useEffect(() => {
    callMyFunc("profile picture", setProfilPics);
  }, []);

  return (
    <>
      <div className={Classes.card}>
        <img className={Classes.bgPic} src={coverPics && coverPics[0]} alt="" />
        <div className={Classes.profilPic}>
          <img src={profilPics && profilPics[0]} alt="" />
        </div>
        <div>
          <p>
            Voluptate irure officia eu cillum fugiat. Et nisi consequat amet
            labore ullamco Lorem officia dolor.
          </p>
          <h5>-Joe Doe</h5>
        </div>
      </div>
      <div className={Classes.card}>
        <img className={Classes.bgPic} src={coverPics && coverPics[1]} alt="" />
        <div className={Classes.profilPic}>
          <img src={profilPics && profilPics[1]} alt="" />
        </div>
        <div>
          <p>
            Voluptate irure officia eu cillum fugiat. Et nisi consequat amet
            labore ullamco Lorem officia dolor.
          </p>
          <h5>-John Doe</h5>
        </div>
      </div>
      <div className={Classes.card}>
        <img className={Classes.bgPic} src={coverPics && coverPics[2]} alt="" />
        <div className={Classes.profilPic}>
          <img src={profilPics && profilPics[2]} alt="" />
        </div>
        <div>
          <p>
            Voluptate irure officia eu cillum fugiat. Et nisi consequat amet
            labore ullamco Lorem officia dolor.
          </p>
          <h5>-Jane Doe</h5>
        </div>
      </div>
    </>
  );
}
const myfunc = (filter) => {
  return fetch(
    `${process.env.REACT_APP_UNSPLASH_URL}?query=${filter}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let images = [
        data.results[2]?.urls.small,
        data.results[3]?.urls.small,
        data.results[7]?.urls.small,
      ];
      return images;
    })
    .catch((e) => console.log(e.message));
};
