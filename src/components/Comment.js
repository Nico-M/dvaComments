import React from 'react';
import styles from './Comment.css';

function Comment({comment,index,onDelete}) {
  
  const handleDelete=(i)=>{
    if(onDelete) onDelete(i)
  }
  return (
     <div className='comment'>
        <div className='comment-user'>
          <span className='comment-username'>
            {comment.username}
          </span>：
        </div>
        <p>
        {comment.comment}
        </p>
        <span className='comment-createdtime'>
          
        </span>
        <span
          onClick={()=>handleDelete(index)}
          className='comment-delete'>
          删除
        </span>
      </div>
  );
}

export default Comment;
