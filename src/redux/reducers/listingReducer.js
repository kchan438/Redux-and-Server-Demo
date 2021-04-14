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
    case 'setListings':
      return {
        ...state,
        listings: action.listingsArr,
      }
    case 'setUserMode':
      return {
        ...state,
        userMode: action.userMode,
      };
    case 'deleteListing':
      return {
        ...state,
        listings: state.listings.filter(listing => listing.id !== action.deleteListing),
      }        
    default:
      return state;
  }
};

export default listingReducer;
