// src/components/TaskForm.jsx
import React, { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./TaskForm.module.css";

const TaskForm = ({ onAddTask }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onAddTask(formData);
    setFormData({ title: "", description: "", dueDate: "" });
    setIsExpanded(false);
  };

  return (
    <motion.div
      className={styles.formContainer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {!isExpanded ? (
        <motion.button
          className={styles.expandButton}
          onClick={() => setIsExpanded(true)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <FiPlus size={24} />
          <span>Add New Task</span>
        </motion.button>
      ) : (
        <motion.form
          className={styles.form}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          onSubmit={handleSubmit}
        >
          <div className={styles.formHeader}>
            <h3>Create New Task</h3>
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              className={styles.closeBtn}
            >
              <FiX size={20} />
            </button>
          </div>

          <div className={styles.formGroup}>
            <label>Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter task title..."
              className={errors.title ? styles.error : ""}
            />
            {errors.title && (
              <span className={styles.errorMsg}>{errors.title}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Description (optional)</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter task description..."
              rows="3"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Due Date (optional)</label>
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formActions}>
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              className={styles.cancelBtn}
            >
              Cancel
            </button>
            <button type="submit" className={styles.submitBtn}>
              <FiPlus size={18} />
              Add Task
            </button>
          </div>
        </motion.form>
      )}
    </motion.div>
  );
};

export default TaskForm;
