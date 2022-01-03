import React from "react";
import "../bootstrap.css";
import "../style.css";
import Task from "../Task/Task";

const Tasks = (props) => {
    const classArray=['bg-dark','bg-warning','bg-success','bg-teal','bg-pink','bg-indigo'];
    const DeleteTaskHandler = (id) =>{
        props.onDeleteTask(id);
    }
    return(
        <div className="card m-md-5">
            <div className="card-body">
                {
                    props.tasks.map((item)=>{
                        return (<Task class={classArray[Math.floor(Math.random()*6)]} DeleteTask={DeleteTaskHandler} id={item.id} key={item.id} time={item.time} date={item.date} title={item.title}></Task> );
                    })
                }
                
            </div>
        </div>
    )
};

export default Tasks;
