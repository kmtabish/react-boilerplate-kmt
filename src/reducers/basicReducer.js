import {Basic} from '../constants/action';
const basicReducer = (state = 'some text', action) => {
    switch(action.type) {
     case Basic.TextChange: return action.text
     default: return state
    }
   }
   export default basicReducer;