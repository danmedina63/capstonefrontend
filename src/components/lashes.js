import React from "react";
import axios from "axios";

export default function Lash(props) {
  const deleteLash = () => {

    axios
      .delete(`http://localhost:5000/product-del/${props.lashData.id}`)
      .then((response) => console.log("success", response));
  };

  return (
    <div className="lash-container">
      <img className="lash-img" src={props.lashData.img_url} />
      <div className="values">
        <h2>{props.lashData.name}</h2>
        <p>{props.lashData.price}</p>
        <h4>{props.lashData.description}</h4>
        {/* <button onClick={deleteLash}>Delete</button>  */}
      </div>
    </div>
  );
};