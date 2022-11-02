import React from "react";

const TuitStats = ({ tuit }) => {
  const { liked, likes, retuits, replies } = tuit;
  const statStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px 0",
  };
  const imgStyles = { width: "14px", marginRight: "4px" };
  const labelStyles = { margin: 0, fontSize: "11px" };
  return (
    <div className="states d-flex justify-content-around">
      <div style={statStyles}>
        <img src="../../tuiter/imgs/chat.svg" style={imgStyles} />
        <h6 style={labelStyles}>{replies}</h6>
      </div>
      <div style={statStyles}>
        <img src="../../tuiter/imgs/retweet.svg" style={imgStyles} />
        <h6 style={labelStyles}>{retuits}</h6>
      </div>
      <div style={statStyles}>
        <img
          src={`../../tuiter/imgs/like${liked ? "-red" : ""}.svg`}
          style={imgStyles}
        />
        <h6 style={labelStyles}>{likes}</h6>
      </div>
      <div style={statStyles}>
        <img src="../../tuiter/imgs/export.svg" style={imgStyles} />
      </div>
    </div>
  );
};

export default TuitStats;
