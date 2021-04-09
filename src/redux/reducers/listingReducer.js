const INITIAL_LIS_STATE = {
  stateName: 'INITIAL_LIS_STATE',
  length: 0,
  title: '',
  description: '',
  postType: '',
  price: '',
  listings: [],
};

const listingReducer = (state = INITIAL_LIS_STATE, action) => {
  console.log(state);
  console.log(action);
  switch(action.type) {
    case 'setTitle':
      return {
          ...state,
          title: action.title,
      };
    case 'setDescription':
      return {
        ...state,
        description: action.description,
      };
    case 'setType':
      return {
        ...state,
        postType: action.postType,
      };
      case 'setPrice':
        return {
          ...state,
          price: action.price,
        };
    default:
      return state;
  }
};

export default listingReducer;
