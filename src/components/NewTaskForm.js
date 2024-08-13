import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [aTask, setATask] = useState({
    category: "Code",
    text: ""
  })

  const optionList = categories.map(category => {
    return <option key={category} >{category}</option>
  })

  function handleSubmit(event){
    event.preventDefault()
    onTaskFormSubmit(aTask)
  }

  function handleChange(event){
    setATask({...aTask, [event.target.name]: event.target.value})
  }

  return (
    <form onSubmit={(event)=>handleSubmit(event)} className="new-task-form">
      <label>
        Details
        <input onChange={(event)=>handleChange(event)} type="text" name="text" value={aTask.text}/>
      </label>
      <label>
        Category
        <select onChange={(event)=>handleChange(event)} name="category" value={aTask.category}>
          {optionList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
