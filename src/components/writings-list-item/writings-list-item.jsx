import React from "react";

import styles from './writings-list-item.module.scss';

const WritingsListItem = ({ writing = { title: '' }, writingChangeHolder }) => (
  <li className={styles.item}>
    <button onClick={() => writingChangeHolder(writing)}>{writing.title}</button>
  </li>
)

export default WritingsListItem
