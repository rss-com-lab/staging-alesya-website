import React from "react";

import styles from './writings-list-item.module.scss';

const WritingsListItem = ({ writing = { title: '' }, writingChangeHolder, active = false }) => (
  <li className={styles.item}>
    <button onClick={() => writingChangeHolder(writing)} disabled={active}>{writing.title}</button>
  </li>
)

export default WritingsListItem
