import * as usersService from '../services/users';
export default {
  namespace: 'users',
  state: {
    list:[]
  },
  reducers: {
    save(state,{payload:{list}}){
      return{list: [
        ...state.list,
        ...list
      ]}
    }
  },
  effects: {
    *fetch({payload:option},{call,put}){
      const {object}= yield call(usersService.fetch,option)
     
      yield put({
        type:'save',
        payload:{list:object.list}
      })
    }
  },
  subscriptions: {},
};
