const INITIAL_LIS_STATE = {
  type: '',
  title: '',
  description: '',
  price: '',
  listings: [],
};

const listingReducer = (state = INITIAL_LIS_STATE, action) => {
  // console.log(state);
  // console.log(action.type);
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
        type: action.postType,
      };
      case 'setPrice':
        return {
          ...state,
          price: action.price,
        };
      case 'pushListings':
          return {
            ...state,
            listings: action.listingsArr,
          }
    default:
      return state;
  }
};

export default listingReducer;
