// src/components/FriendListItem/index.jsx
import React from 'react';
import styles from './style.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div className={styles.friend}>
    <img src={avatar} alt="Avatar" width="48" className={styles.avatar} />
    <p className={styles.name}>{name}</p>
    <p className={isOnline ? styles.online : styles.offline}>
      {isOnline ? 'Online' : 'Offline'}
    </p>
  </div>
);

export default FriendListItem;
