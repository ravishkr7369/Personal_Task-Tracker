
import React from "react";
import { FiCheckCircle, FiList, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";
import styles from "./Header.module.css";

const Header = ({ stats }) => {
  return (
    <motion.header
      className={styles.header}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.headerContent}>
        <div className={styles.logoSection}>
          <div className={styles.logoIcon}>
            <FiList size={28} />
          </div>
          <h1 className={styles.title}>Personal Task Manager</h1>
        </div>

        <div className={styles.stats}>
          <motion.div
            className={`${styles.statCard} ${styles.activeStat}`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FiList className={styles.statIcon} />
            <div className={styles.statInfo}>
              <span className={styles.statValue}>{stats.active}</span>
              <span className={styles.statLabel}>Active</span>
            </div>
          </motion.div>

          <motion.div
            className={`${styles.statCard} ${styles.completedStat}`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FiCheckCircle className={styles.statIcon} />
            <div className={styles.statInfo}>
              <span className={styles.statValue}>{stats.completed}</span>
              <span className={styles.statLabel}>Completed</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
