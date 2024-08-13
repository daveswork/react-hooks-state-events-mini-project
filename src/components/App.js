import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [myTaskList, setMyTaskList] = useState(TASKS)
  const [activeCategory, setActiveCategory] = useState("")


  const filteredTasks = myTaskList.filter(task => {
    if(activeCategory==="" || activeCategory === "All"){
      return true
    } else {
      return task.category === activeCategory
    }
  })

  const formCategories = CATEGORIES.filter(category => category != "All")

  function addTask(newTask){
    setMyTaskList([...myTaskList, newTask])
  }

  function removeTask(removedTask){
    const currentTasks = myTaskList.filter(task => task.text != removedTask)
    setMyTaskList(currentTasks)

  }


  return (
    <div className="App">
      
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
      <NewTaskForm categories={formCategories} onTaskFormSubmit={addTask}/>
      <TaskList tasks={filteredTasks} removeTask={removeTask}/>
    </div>
  );
}

export default App;
