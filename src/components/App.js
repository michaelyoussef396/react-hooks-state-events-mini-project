import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);

  const deleteTask = (text) => {
    setTasks(tasks.filter((task) => task.text !== text));
  };

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onSelectCategory={handleCategorySelect}
        selectedCategory={selectedCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={filteredTasks} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;