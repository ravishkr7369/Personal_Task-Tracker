import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import TaskForm from "../components/TaskForm";
import FilterBar from "../components/FilterBar";
import TaskList from "../components/TaskList";
import { dummyTasks } from "../data/dummyTasks";
import styles from "./Home.module.css";
import {getTasksApi ,deleteTaskApi,createTaskApi,updateTaskApi,toggleTaskApi} from "../services/task.service";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Load dummy data

    const fetchTasks = async () => {
      try {
        const data = await getTasksApi();
        if (data && Array.isArray(data)) {
          setTasks(data || []);
        }
      } catch (error) {
      
  
      }
    };

    fetchTasks();
  }, []);

 const addTask = async (newTask) => {
   try {
     const createdTask = await createTaskApi(newTask);

     const task = {
       ...createdTask,
       id: createdTask._id,
     };

     setTasks((prev) => [task, ...prev]);
   } catch (error) {
   
   }
 };

const editTask = async (updatedTask) => {
  try {
    const response = await updateTaskApi(updatedTask._id, updatedTask);

    const task = {
      ...response,
      id: response._id,
    };

    setTasks((prev) => prev.map((t) => (t._id === updatedTask._id ? task : t)));
  } catch (error) {
  
  }
};

 const deleteTask = async (taskId) => {
   try {
     await deleteTaskApi(taskId);

     setTasks((prev) => prev.filter((task) => task._id !== taskId));
   } catch (error) {
    
   }
 };

  const toggleTaskStatus = async (taskId, completed) => {
  try {
    const updatedTask = await toggleTaskApi(
      taskId,
      !completed
    );

    setTasks((prev) =>
      prev.map((task) =>
        task._id === taskId
          ? {
              ...updatedTask,
              id: updatedTask._id,
            }
          : task
      )
    );
  } catch (error) {
   
  }
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
          onDeleteTask={ deleteTask}
          onToggleComplete={ toggleTaskStatus}
        />
      </div>
    </div>
  );
};

export default Home;
