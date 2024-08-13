import React from "react";
import Task from "./Task";

function TaskList({tasks, removeTask}) {

  const someTasks = tasks.map((taskItem, index) =>{
  return <Task key={index} text={taskItem.text} category={taskItem.category} removeTask={removeTask}/>
})


  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {someTasks}
    </div>
  );
}

export default TaskList;
