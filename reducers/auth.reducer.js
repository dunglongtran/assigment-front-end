import { AsyncStorage } from 'react-native';
export const initialState = { isLogined: false,isFirst:true };

export function reducer(state, action) {
  switch (action.type) {
    case 'checkLogin':
      return { ...state, isLogined: action.isLogined, isFirst:false };
    case 'logined':
      return loginHandler(state, action);
    case 'logout':
      return logoutHandler(state, action);
    case 'register':
      return registerHandler(state, action);
    default:
      throw new Error();
  }
}

function loginHandler(state, action) {
  console.log('loginHandler',state,action);
  return { ...state, isLogined:action.isLogined,isFirst:false };
}
function logoutHandler(state, action) {
  console.log('logoutHandler');
  return { ...state, isLogined: false,isFirst:false };
}
function registerHandler(state, action) {
  console.log('registerHandler',state,action);
  return { ...state, isLogined: true,isFirst:false };
}
