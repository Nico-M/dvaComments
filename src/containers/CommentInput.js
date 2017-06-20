import CommentInput from '../components/CommentInput'
import React, { Component } from 'react'
import { connect } from 'dva'

class CommentInputContainer extends Component {
    constructor(props) {
        super(props)
    }
    handleSubmit(comment) {
        if(!comment) return;
        if(!comment.username) return alert('please enter your name');
    if(!comment.comment) return alert('please enter yout comment');
        const { dispatch } = this.props
        dispatch({
            type: 'comment/add_comment',
            payload: comment
        })
    }
    render() {
        return (
            <CommentInput
                onSubmit={this.handleSubmit.bind(this)}
            />
        )
    }

}

// const mapStateToProps = (state){
//     return {
//         comments: state.comments
//     }
// }

// const mapDispatchToState=(dispatch){
//     return {
//         onSave:(comments)=>{
//             dispatch({
//                 type:'SAVE_COMMENTS',
//                 payload:comments
//             })
//         }
//     }
// }


export default connect()(CommentInputContainer)
