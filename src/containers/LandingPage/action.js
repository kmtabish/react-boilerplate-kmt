import {Basic} from '../../constants/action';
export const textChange = () => {
    return (dispatch) => {
        dispatch({type: Basic.TextChange, text: 'new text' });
    }
}