const INITIAL_STATE = {
  type: '',
  message: '',
  inquiries: [],
};

const inquiryReducer = (state = INITIAL_STATE, action) => {
  console.log(state);
  console.log(action);
  switch(action.type) {
    case 'getInquiryList':
      return {
        ...state,
        inquiries: action.getInq,
      };
    default:
      // console.log('default state');
      return state;
  }
};


export default inquiryReducer;
