import _ from 'lodash'

/* 액션 타입 만들기 */
// Ducks 패턴을 따를땐 액션의 이름에 접두사를 넣어주세요.
// 이렇게 하면 다른 모듈과 액션 이름이 중복되는 것을 방지 할 수 있습니다.
export const NOTIFY_SUCCESS:string = 'NOTIFY_SUCCESS';
export const NOTIFY_WARNING:string = 'NOTIFY_WARNING';
export const NOTIFY_ERROR:string = 'NOTIFY_ERROR';
export const NOTIFY_INFO:string = 'NOTIFY_INFO';
export const NOTIFY_OFF:string = 'NOTIFY_OFF';

/* 초기 상태 선언 */
const initialState = {
    message: '',
    type: 'info',
    show: false,
    duration: 4000,
  };

/* 액션 생성함수 만들기 */
// 액션 생성함수를 만들고 export 키워드를 사용해서 내보내주세요.
// 액션안에는 type 외에 추가적인 필드를 마음대로 넣을 수 있습니다.
export const notifySuccess = (message = '', duration = 4000) => ({ type: NOTIFY_SUCCESS, payload: { message, duration } });
export const notifyWarning = (message = '', duration = 4000) => ({ type: NOTIFY_WARNING, payload: { message, duration } });
export const notifyError = (message = '', duration = 4000) => ({ type: NOTIFY_ERROR, payload: { message, duration } });
export const notifyInfo = (message = '', duration = 4000) => ({ type: NOTIFY_INFO, payload: { message, duration } });
export const notifyOff = () => ({ type: NOTIFY_OFF });


type getPayload = {
    message: string,
    duration: number
}

type newState = {
    message:string,
    type: string,
    show: boolean,
    duration: number,
}

function notifyFunction(state:newState, type:string, payload:getPayload) {
    const { message, duration } = payload;
    const newState = _.cloneDeep(state);
    newState.message = message;
    newState.type = type;
    newState.show = true;
    newState.duration = duration;
    return newState;
  }

  /* 리듀서 만들기 */
// 위 액션 생성함수들을 통해 만들어진 객체들을 참조하여
// 새로운 상태를 만드는 함수를 만들어봅시다.
// 주의: 리듀서에서는 불변성을 꼭 지켜줘야 합니다!
export const notifyReducer = (state:newState = initialState, action:{type:string, payload:getPayload}) => {
    const { type, payload } = action;
    
    switch (type) {
      case NOTIFY_SUCCESS:
        return notifyFunction(state, 'success', payload);
      case NOTIFY_WARNING:
        return notifyFunction(state, 'warning', payload);
      case NOTIFY_ERROR:
        return notifyFunction(state, 'error', payload);
      case NOTIFY_INFO:
        return notifyFunction(state, 'info', payload);
      case NOTIFY_OFF:
        return {
          ...state,
          message: '',
          duration: 4000,
          show: false,
        };
      default:
        return state;
    }
  };