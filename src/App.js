import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./components/style.css";
import "./components/bootstrap.css";
import TaskInputForm from "./components/TaskInputForm/TaskInputForm";
import Tasks from "./components/Tasks/Tasks";
import { About } from "./components/About/About";
import Login from "./components/Login/Login";
import {useSelector,useDispatch} from "react-redux";
function App() {
  // Useful Variables!!
  const [showForm, setshowForm] = useState(false);
  const [tasks, settasks] = useState([]);
  const [location, setlocation] = useState("/");
  const dispatch = useDispatch();
  let status=useSelector(state=>state.status);
  let displayForm;
  // Adds New Task
  const onNewTaskHandler = async (data) => {
    const res = await fetch(`http://localhost:3300/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const receivedData = await res.json();
    settasks((prevState) => {
      return [...prevState, receivedData];
    });
    setshowForm(false);
  };

  //j Tasks from dummy database


  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch("http://localhost:3300/tasks");
      const data = await res.json();
      settasks(data);
    };
    fetchTasks();
  }, []);

  // Confirms From showing
  if (showForm) {
    displayForm = (
      <TaskInputForm
        onCancel={() => {
          setshowForm(false);
        }}
        onNewTask={onNewTaskHandler}
      ></TaskInputForm>
    );
  } else {
    displayForm = "";
  }

  // Delete Tasks

  const onDeleteTaskHandler = async (id) => {
    await fetch(`http://localhost:3300/tasks/${id}`, {
      method: "DELETE",
    });
    settasks(tasks.filter((task) => task.id !== id));
  };

  // Hides Add Button

  const hideAddButton = () => {
    setlocation("temp");
  };

  // Home Element

  const Home = (props) => {
    setlocation("/");
    return (
      <>
        {displayForm}
        {tasks.length !== 0 ? (
          <Tasks tasks={tasks} onDeleteTask={onDeleteTaskHandler}></Tasks>
        ) : (
          <h1>No Data To Show!!</h1>
        )}
      </>
    );
  };
  return (
    <Router>
      <div className="container">
        <div className="card m-md-5 m-1">
          <div className="card-header bg-purple">
            <div className="row">
              <div className="col-6">
                <h1 className="title">Task Tracker</h1>
              </div>
              <div className="col-6 text-right">
                {location === "/" && (status===1) && (
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        dispatch({type:"Logged_OUT"});
                      }}
                      className="btn btn-dark btn_big"
                    >
                      Logout
                    </button>&nbsp;&nbsp;
                    <button
                      type="button"
                      onClick={() => {
                        setshowForm(true);
                      }}
                      className="btn btn-dark btn_big"
                    >
                      Add
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="card-body p-5 bg-dark text-white">
            <Routes>
              {(status!==1) && (
                <Route path="/" element={<Login></Login>}></Route>
              )}
              {(status===1) && (
                <Route path="/" exact element={<Home></Home>}></Route>
              )}
              <Route path="/about" element={<About></About>} />
            </Routes>
          </div>
          <div className="card-footer bg-purple text-center">
            Copyright &copy; 2021
            <br />
            <Link
              to="/about"
              className="text-white title"
              style={{ fontSize: "2rem" }}
              onClick={hideAddButton}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
