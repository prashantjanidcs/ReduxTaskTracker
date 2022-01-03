import React,{useState} from "react";
import "../bootstrap.css";
import "../style.css";
const TaskInputForm = (props) => {
  const [userInput, setuserInput] = useState({
    title: '',
    date: '',
    time: '',
  });
  const taskTitleHandler = (e) => {
    setuserInput((prevState) => {
      return {
        ...prevState,
        title: e.target.value,
      };
    });
  };

  const taskDateHandler = (e) => {
    setuserInput((prevState) => {
      return {
        ...prevState,
        date: new Date(e.target.value),
      };
    });
  };
  const taskTimeHandler = (e) => {
    setuserInput((prevState) => {
      return {
        ...prevState,
        time: e.target.value,
      };
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onNewTask(userInput);
    setuserInput({
      title: "",
      date: "",
      time: "",
    });
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="card ml-5 mr-5 mt-3">
        <div className="card-body text-dark">
          <div className="row">
            <div className="col-md-6 col-12 offset-md-3">
              <label>Task Name</label>
              <input
                type="text"
                placeholder="Enter Task Name"
                onChange={taskTitleHandler}
                className="form-control"
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-6 col-12 offset-md-3">
              <label>Date</label>
              <input
                type="date"
                className="form-control"
                onChange={taskDateHandler}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-6 col-12 offset-md-3">
              <label>Time</label>
              <input
                type="time"
                className="form-control"
                onChange={taskTimeHandler}
              />
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-md-6 col-12 offset-md-3 text-center">
              <button
                type="button"
                onClick={props.onCancel}
                className="btn btn-danger mr-1"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-success ml-1">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default TaskInputForm;
