import React from 'react';
import styles from './Comment.css';
import CommentInput from './CommentInput'
import CommentList from './CommentList'

function CommentApp() {
  return (
    <div className={styles.normal}>
      <CommentInput />
      <CommentList />
    </div>
  );
}

export default CommentApp;
