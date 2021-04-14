const INITIAL_STATE = {
  // id: '',
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
    //used for user
    case 'appendInquiry':
      return {
        ...state,
        inquiries: [...state.inquiries, action.appendInq],
      };
    default:
      return state;
  }
};


export default inquiryReducer;
