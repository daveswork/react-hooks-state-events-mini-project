import React from "react";

function Task({text, category, removeTask}) {

  function deleteMe(event){
    
    // event.target.parentNode.remove()
    removeTask(event.target.previousSibling.textContent)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={(event) => deleteMe(event)} className="delete">X</button>
    </div>
  );
}

export default Task;
