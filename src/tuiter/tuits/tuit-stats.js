import React from "react";
import { updateTuitThunk } from "../../services/tuits-thunks";
import { useDispatch } from "react-redux";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
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
        <img src="../../tuiter/imgs/chat.svg" style={imgStyles} alt="chat" />
        <h6 style={labelStyles}>{replies}</h6>
      </div>
      <div style={statStyles}>
        <img
          src="../../tuiter/imgs/retweet.svg"
          style={imgStyles}
          alt="retuit"
        />
        <h6 style={labelStyles}>{retuits}</h6>
      </div>
      <div style={statStyles}>
        <img
          src={`../../tuiter/imgs/like${liked ? "-red" : ""}.svg`}
          style={imgStyles}
          alt="like"
          onClick={() =>
            dispatch(
              updateTuitThunk({
                ...tuit,
                likes: tuit.likes + 1,
              })
            )
          }
        />
        <h6 style={labelStyles}>{likes}</h6>
      </div>
      <div style={statStyles}>
        <img
          src="../../tuiter/imgs/export.svg"
          style={imgStyles}
          alt="export"
        />
      </div>
    </div>
  );
};

export default TuitStats;
