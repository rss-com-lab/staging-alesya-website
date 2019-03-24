import React from "react";

import WritingsListItem from '../writings-list-item/writings-list-item';
import styles from './writings-list.module.scss';

const WritingsList = ({ writings = [], writingChangeHolder, writing = null }) => (
  <nav>
    <ul className={styles.list}>
      {writings.map(item => <WritingsListItem
        key={`${item.title}/${item.node_locale}`}
        writingChangeHolder={writingChangeHolder} 
        writing={item}
        active={item === writing}
      />)}
    </ul>
  </nav>
)

export default WritingsList
