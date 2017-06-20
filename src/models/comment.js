
export default {
  namespace: 'comment',
  state: {
    comments:[]
  },
  reducers: {
    add_comment(state,{payload:comment}){

      return {
        comments:[
          ...state.comments,
          comment
        ]
      }
    },
    delete_comment(state,{payload:index}){

      return {
        comments:[
          ...state.comments.slice(0,index),
          ...state.comments.slice(index+1)
        ]
      }
    }
  },
  effects: {},
  subscriptions: {},
};
