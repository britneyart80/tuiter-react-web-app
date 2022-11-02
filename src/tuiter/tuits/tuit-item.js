import React from "react";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import { deleteTuit } from "./tuits-reducer";

// tuit =   {
//     "_id": 123,
//     "topic": "Space",
//     "userName": "SpaceX",
//     "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
//     "time": "2h",
//     "image": "../../tuiter/imgs/tesla.png"
//   }

const TuitItem = (props) => {
  const {
    tuit: { _id, topic, userName, handle, tuit, time, image },
  } = props;
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };

  return (
    <li className="list-group-item">
      <div className="row mt-2">
        <div className="col-2">
          <img
            width={45}
            height={45}
            className="float-end rounded-circle"
            src={`/images/${image}`}
            alt={topic}
          />
        </div>
        <div className="col-10">
          <div>
            <i
              className="bi bi-x-lg float-end"
              onClick={(e) => {
                console.log(_id);
                deleteTuitHandler(_id);
              }}
            ></i>
            <b>{userName}</b> {handle} . {time}
          </div>
          <div>{tuit}</div>
        </div>
      </div>
      <TuitStats key={tuit._id} tuit={props.tuit} />
    </li>
  );
};
export default TuitItem;
