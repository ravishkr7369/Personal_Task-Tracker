// src/components/TaskCard.jsx
import React, { useState } from "react";
import {
  FiEdit2,
  FiTrash2,
  FiCheckCircle,
  FiCircle,
  FiAlertCircle,
  FiCalendar,
} from "react-icons/fi";
import { motion } from "framer-motion";
import DeleteModal from "./DeleteModal";
import styles from "./TaskCard.module.css";

const TaskCard = ({ task, onEdit, onDelete, onToggleComplete }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title: task.title,
    description: task.description,
    dueDate: task.dueDate,
  });

  const isOverdue =
    task.dueDate && !task.completed && new Date(task.dueDate) < new Date();
  const formattedDueDate = task.dueDate
    ? new Date(task.dueDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  const handleEditSubmit = () => {
    onEdit({
      ...task,
      ...editData,
    });
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <motion.div
        className={`${styles.taskCard} ${styles.editingCard}`}
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
      >
        <input
          type="text"
          value={editData.title}
          onChange={(e) => setEditData({ ...editData, title: e.target.value })}
          className={styles.editInput}
          placeholder="Title"
        />
        <textarea
          value={editData.description}
          onChange={(e) =>
            setEditData({ ...editData, description: e.target.value })
          }
          className={styles.editTextarea}
          placeholder="Description"
          rows="2"
        />
        <input
          type="date"
          value={editData.dueDate}
          onChange={(e) =>
            setEditData({ ...editData, dueDate: e.target.value })
          }
          className={styles.editInput}
        />
        <div className={styles.editActions}>
          <button
            onClick={() => setIsEditing(false)}
            className={styles.cancelEditBtn}
          >
            Cancel
          </button>
          <button onClick={handleEditSubmit} className={styles.saveEditBtn}>
            Save
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <>
      <motion.div
        className={`${styles.taskCard} ${isOverdue ? styles.overdue : ""} ${task.completed ? styles.completed : ""}`}
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
      >
        <div className={styles.cardHeader}>
          <button
            onClick={() => onToggleComplete(task.id)}
            className={styles.completeBtn}
          >
            {task.completed ? (
              <FiCheckCircle size={22} />
            ) : (
              <FiCircle size={22} />
            )}
          </button>
          <div className={styles.titleSection}>
            <h3
              className={`${styles.taskTitle} ${task.completed ? styles.completedText : ""}`}
            >
              {task.title}
            </h3>
            {isOverdue && (
              <span className={styles.overdueBadge}>
                <FiAlertCircle size={14} />
                Overdue
              </span>
            )}
            {task.completed && (
              <span className={styles.completedBadge}>Completed</span>
            )}
          </div>
          <div className={styles.cardActions}>
            <button
              onClick={() => setIsEditing(true)}
              className={styles.editBtn}
            >
              <FiEdit2 size={18} />
            </button>
            <button
              onClick={() => setShowDeleteModal(true)}
              className={styles.deleteBtn}
            >
              <FiTrash2 size={18} />
            </button>
          </div>
        </div>

        {task.description && (
          <p
            className={`${styles.description} ${task.completed ? styles.completedText : ""}`}
          >
            {task.description}
          </p>
        )}

        {formattedDueDate && (
          <div className={styles.dueDate}>
            <FiCalendar size={14} />
            <span>Due: {formattedDueDate}</span>
          </div>
        )}
      </motion.div>

      <DeleteModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={() => {
          onDelete(task.id);
          setShowDeleteModal(false);
        }}
        taskTitle={task.title}
      />
    </>
  );
};

export default TaskCard;
