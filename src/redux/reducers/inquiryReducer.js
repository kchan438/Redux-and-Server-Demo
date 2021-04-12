const INITIAL_STATE = {
  type: '',
  // id: '',
  message: '',
  inquiries: [],
};

const inquiryReducer = (state = INITIAL_STATE, action) => {
  // console.log(state);
  // console.log(action);
  switch(action.type) {
    case 'getInquiryList':
      return {
        ...state,
        inquiries: action.getInq,
      };
    case 'setInquiryList':
      return {
        ...state,
        message: action.setInq,
      };
    default:
      return state;
  }
};


export default inquiryReducer;
