
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import TaskForm from "../components/TaskForm";
import FilterBar from "../components/FilterBar";
import TaskList from "../components/TaskList";
import { dummyTasks } from "../data/dummyTasks";
import styles from "./Home.module.css";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Load dummy data
    setTasks(dummyTasks);
  }, []);

  const addTask = (newTask) => {
    const taskWithId = {
      ...newTask,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks([taskWithId, ...tasks]);
  };

  const editTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)),
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === "all"
        ? true
        : filter === "active"
          ? !task.completed
          : filter === "completed"
            ? task.completed
            : true;

    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const stats = {
    active: tasks.filter((t) => !t.completed).length,
    completed: tasks.filter((t) => t.completed).length,
  };

  return (
    <div className={styles.home}>
      <Header stats={stats} />
      <div className={styles.content}>
        <TaskForm onAddTask={addTask} />
        <FilterBar
          currentFilter={filter}
          onFilterChange={setFilter}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <TaskList
          tasks={filteredTasks}
          onEditTask={editTask}
          onDeleteTask={deleteTask}
          onToggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
};

export default Home;
