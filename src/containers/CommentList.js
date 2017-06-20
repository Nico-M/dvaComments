import CommentList from '../components/CommentList'
import React, { Component } from 'react'
import {connect} from 'dva'

class CommentListContainer extends Component {
    constructor(props){
        super(props)
        
    }
    handleDelete(index){
        const { dispatch } = this.props
        dispatch({
            type:'comment/delete_comment',
            payload:index
        })
    }
    render() {
        return (<CommentList onDelete={this.handleDelete.bind(this)} comments={this.props.comments} />)
    }

}
const mapStateToProps=(state)=>{
    const {comments} = state.comment
    return {
        comments
    }
}

export default connect(mapStateToProps)(CommentListContainer)

