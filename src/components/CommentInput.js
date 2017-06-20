import React,{Component} from 'react';
import styles from './CommentInput.css';
import PropTypes from 'prop-types'

class CommentInput extends Component {
  static propTypes={
    onSubmit:PropTypes.func
  }
  constructor(props){
    super(props)
    this.state={
      username:'',
      comment:''
    }
  }
  handleUsername(e){
    this.setState({
      username:e.target.value
    })
  }
  handleComment(e){
    this.setState({
      comment:e.target.value
    })
  }
  componentDidMount(){
    this.textarea.focus()
  }
  handleSubmit(){
    const {username,comment} = this.state
    
    if(this.props.onSubmit){
      this.props.onSubmit({
        username,
        comment
      })
    }
  }
  render(){
    return (
    <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input
                onChange={this.handleUsername.bind(this)}
                value={this.state.username}
             />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea
              onChange={this.handleComment.bind(this)}
              value={this.state.comment}
              ref={(textarea)=>(this.textarea=textarea)}
             />
          </div>
        </div>
        <div className='comment-field-button'>
          <button
          onClick={this.handleSubmit.bind(this)}
            >
            发布
          </button>
        </div>
      </div>
  );
  }
  
}

export default CommentInput;
