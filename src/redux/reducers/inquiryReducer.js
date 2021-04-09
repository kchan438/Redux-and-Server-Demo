const INITIAL_STATE = {
  stateType: 'INITIAL_INQ_STATE',
  length: 0,
  message: '',
  inquiries: [],
};

const inquiryReducer = (state = INITIAL_STATE, action) => {
  // console.log(state);
  // console.log(action);
  switch(action.stateType) {
    case 'getInquiry':
      return {
        ...state,
        message: action.getInquiry,
      };
    default:
      // console.log('default state');
      return state;
  }
};


export default inquiryReducer;
