import React, {useState} from "react";

function CategoryFilter({categories, activeCategory, setActiveCategory}) {

  function handleClick(event){
    setActiveCategory(event.target.textContent)
  }


  const buttonList = categories.map(category =>{
    return <button onClick={(event)=> handleClick(event)} className={category===activeCategory? "selected":""} key={category}>{category}</button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonList}
    </div>
  );
}

export default CategoryFilter;
