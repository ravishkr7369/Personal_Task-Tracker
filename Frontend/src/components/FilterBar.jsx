// src/components/FilterBar.jsx
import React from "react";
import {
  FiSearch,
  FiFilter,
  FiCheckCircle,
  FiCircle,
  FiList,
} from "react-icons/fi";
import { motion } from "framer-motion";
import styles from "./FilterBar.module.css";

const FilterBar = ({
  currentFilter,
  onFilterChange,
  searchQuery,
  onSearchChange,
}) => {
  const filters = [
    { id: "all", label: "All", icon: FiList },
    { id: "active", label: "Active", icon: FiCircle },
    { id: "completed", label: "Completed", icon: FiCheckCircle },
  ];

  return (
    <div className={styles.filterBar}>
      <div className={styles.searchSection}>
        <FiSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search tasks by title..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.filterSection}>
        {filters.map((filter) => {
          const Icon = filter.icon;
          return (
            <motion.button
              key={filter.id}
              className={`${styles.filterBtn} ${currentFilter === filter.id ? styles.active : ""}`}
              onClick={() => onFilterChange(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={16} />
              <span>{filter.label}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterBar;
