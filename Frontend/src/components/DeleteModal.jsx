// src/components/DeleteModal.jsx
import React from "react";
import { FiAlertTriangle, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./DeleteModal.module.css";

const DeleteModal = ({ isOpen, onClose, onConfirm, taskTitle }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className={styles.modalOverlay} onClick={onClose}>
        <motion.div
          className={styles.modalContainer}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.modalHeader}>
            <div className={styles.warningIcon}>
              <FiAlertTriangle size={28} />
            </div>
            <button className={styles.closeModalBtn} onClick={onClose}>
              <FiX size={20} />
            </button>
          </div>

          <h3 className={styles.modalTitle}>Delete Task</h3>
          <p className={styles.modalMessage}>
            Are you sure you want to delete "<strong>{taskTitle}</strong>"? This
            action cannot be undone.
          </p>

          <div className={styles.modalActions}>
            <button className={styles.cancelModalBtn} onClick={onClose}>
              Cancel
            </button>
            <button className={styles.deleteModalBtn} onClick={onConfirm}>
              Delete Task
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DeleteModal;
