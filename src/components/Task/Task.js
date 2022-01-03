import React from "react";
import "../bootstrap.css";
import "../style.css";

const Task = (props) => {
  const DeleteTaskHandler = () => {
    props.DeleteTask(props.id);
  };
  const newDate = new Date(props.date);
  const date =
    newDate.toLocaleString("en-US", { day: "2-digit" }) +
    " " +
    newDate.toLocaleString("en-US", { month: "short" }) +
    " " +
    newDate.getFullYear();
  return (
    <div className={`card m-md-3 text-white ${props.class}`}>
      <div className="card-body">
        <div className="row">
          <div className="col-6">
            <h2>{props.title}</h2>
            <br />
            <label>{date}</label>
            <br />
            <label>{props.time}</label>
          </div>
          <div className="col-6 text-right">
            <button
              className="btn btn-danger"
              onClick={DeleteTaskHandler}
              type="button"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
