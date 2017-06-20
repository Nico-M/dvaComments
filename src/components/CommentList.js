import React from 'react';
import styles from './CommentList.css';
import Comment from './Comment'

function CommentList(props) {
  const handleDelete=(index)=>{
    if(props.onDelete) props.onDelete(index)
  }
  return (
    <div className={styles.normal}>
      {props.comments.map((comment,i)=>{
        return <Comment key={i} comment={comment} index={i} onDelete={handleDelete} />
      })}
    </div>
  );
}

export default CommentList;
