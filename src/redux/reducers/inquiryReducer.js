const INITIAL_STATE = {
  message: '',
  inquiries: [],
};

const inquiryReducer = (state = INITIAL_STATE, action) => {
  console.log(state);
  console.log(action);
  switch(action.type) {
    //used for admin
    case 'setInquiryList':
      return {
        ...state,
        inquiries: action.inquiries,
      };
    //used for user
    case 'sendInquiry':
      return {
        ...state,
        message: action.message,
      };
    default:
      return state;
  }
};


export default inquiryReducer;
