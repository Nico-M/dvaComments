import * as usersService from '../services/users';
export default {
  namespace: 'users',
  state: {
    list:[]
  },
  reducers: {
    update(state,{payload:{list}}){
      return{list: [
        ...list
      ]}
    }
  },
  effects: {
    *fetch({payload:option},{call,put}){
      const {object}= yield call(usersService.fetch,option)
     
      yield put({
        type:'update',
        payload:{list:object.list}
      })
    }
  },
  subscriptions: {
    
  },
};
