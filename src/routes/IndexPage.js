import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import CommentApp from '../containers/CommentApp'

function IndexPage() {
  return (
    <div className={styles.normal}>
      <CommentApp />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
