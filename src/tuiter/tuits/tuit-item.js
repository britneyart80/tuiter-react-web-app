import React from "react";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../../services/tuits-thunks";

const TuitItem = (props) => {
  const {
    tuit: { _id, topic, username, handle, tuit, time, image },
  } = props;
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };

  return (
    <li className="list-group-item">
      <div className="row mt-2">
        <div className="col-2">
          <img
            width={45}
            height={45}
            className="float-end rounded-circle"
            src={require(`../../imgs/${image}`)}
            alt={topic}
          />
        </div>
        <div className="col-10">
          <div>
            <i
              className="bi bi-x-lg float-end"
              onClick={(e) => {
                deleteTuitHandler(_id);
              }}
            ></i>
            <b>{username}</b> {handle} . {time}
          </div>
          <div>{tuit}</div>
        </div>
      </div>
      <TuitStats key={tuit._id} tuit={props.tuit} />
    </li>
  );
};
export default TuitItem;
