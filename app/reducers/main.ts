import { Action as ActionInterface } from '../interfaces/action';
import { Question as QuestionInterface } from '../interfaces/question';

export const types = {
  GET_WELCOME_FLOW: 'GET_WELCOME_FLOW',
  SET_WELCOME_FLOW: 'SET_WELCOME_FLOW',
  GET_OPERATION_FLOW: 'GET_OPERATION_FLOW',
  SET_OPERATION_FLOW: 'SET_OPERATION_FLOW',
  GET_INQUIRERS: 'GET_INQUIRERS',
  SET_INQUIRERS: 'SET_INQUIRERS',
  SAVE_ANSWER: 'SAVE_ANSWER',
  SET_FATAL_ERROR: 'SET_FATAL_ERROR',
};

export const initialState = {
  welcomeFlow: null,
  operationFlow: null,
  inquirers: null,
  fatalError: null,
  // user data
  dataUser: {
    operationalFlow: '',
    answers: {},
  },
};

const MainReducer = (state = initialState, action: ActionInterface) => {
  switch (action.type) {
    case types.SET_WELCOME_FLOW:
      return {
        ...state,
        welcomeFlow: action.data,
      };
    case types.SET_OPERATION_FLOW:
      return {
        ...state,
        operationFlow: action.data,
      };
    case types.SET_INQUIRERS:
      return {
        ...state,
        inquirers: action.data,
      };
    case types.SET_FATAL_ERROR:
      return {
        ...state,
        fatalError: action.err,
      };
    default:
      return { ...state };
  }
};

export const actions = {
  saveAnswer: (id: string, value: string) => ({
    type: types.SAVE_ANSWER,
    data: { id, value },
  }),
  getWelcomeFlow: () => ({ type: types.GET_WELCOME_FLOW }),
  setWelcomeFlow: (data: Array<QuestionInterface>) => ({
    type: types.SET_WELCOME_FLOW,
    data,
  }),
  getOperationFlow: () => ({ type: types.GET_OPERATION_FLOW }),
  setOperationFlow: data => ({ type: types.SET_OPERATION_FLOW, data }),
  getInquirers: () => ({ type: types.GET_INQUIRERS }),
  setInquirers: data => ({ type: types.SET_INQUIRERS, data }),
  setFatalError: (err: string) => ({ type: types.SET_FATAL_ERROR, err }),
};

export default MainReducer;
