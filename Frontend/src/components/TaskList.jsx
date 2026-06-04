// src/components/TaskList.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import TaskCard from "./TaskCard";
import { FiInbox } from "react-icons/fi";
import styles from "./TaskList.module.css";

const TaskList = ({ tasks, onEditTask, onDeleteTask, onToggleComplete }) => {
  if (tasks.length === 0) {
    return (
      <motion.div
        className={styles.emptyState}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className={styles.emptyIcon}>
          <FiInbox size={64} />
        </div>
        <h3>No tasks found</h3>
        <p>Create your first task to get started!</p>
      </motion.div>
    );
  }

  return (
    <div className={styles.taskList}>
      <AnimatePresence>
        {tasks.map((task, index) => (
          
          <motion.div
            key={task._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <TaskCard
              task={task}
              onEdit={onEditTask}
              onDelete={onDeleteTask}
              onToggleComplete={onToggleComplete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TaskList;
