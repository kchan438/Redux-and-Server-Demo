import Axios from 'axios';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setInquiryList } from '../redux/actions/inquiryActions';
import { setTitle, setDescription, setType, setPrice, setListings } from '../redux/actions/listingActions';

const ListingCreationForm = () => {

  //function that fetches data from store
  const dispatch = useDispatch();
  //gets the state variables
  const reducerTitle = useSelector(state => state.listingReducer.title);
  const reducerDescription = useSelector(state => state.listingReducer.description);
  const reducerType = useSelector(state => state.listingReducer.postType);
  const reducerPrice = useSelector(state => state.listingReducer.price);
  
  const inputListing = () => {
    const body = {
      title: document.getElementById('input-title').value,
      description: document.getElementById('input-description').value,
      type: document.getElementById('input-type').value,
      price: document.getElementById('input-price').value,
    };

    Axios.post('/api/createListing', body)
      .then((res) => {
        console.log(res.data);
        dispatch(setInquiryList(res.data.items));
      })
      .catch((err) => {
        console.log(err);
      });
    Axios.get('/api/viewListings')
      .then((res) => {
        console.log(res.data.items);
        dispatch(setListings(res.data.items));
      })
      .catch((err) => {
        console.log(err);
      });
    document.getElementById('input-title').value = '';
    document.getElementById('input-description').value = '';
    document.getElementById('input-type').value = '';
    document.getElementById('input-price').value = '';
  };

  return (
    <div>
      <div className="block">
        <label>Title: </label>
        <input 
            id="input-title"
            value={reducerTitle}
            onChange={e => dispatch(setTitle(e.target.value))}
          />
      </div>
      <div className="block">
        <label>Description: </label>
        <input 
            id="input-description"
            value={reducerDescription}
            onChange={e => dispatch(setDescription(e.target.value))}
          />
      </div>
      <div className="block">
        <label>Type: </label>
        <input 
            id="input-type"
            value={reducerType}
            onChange={e => dispatch(setType(e.target.value))}
          />
      </div>
      <div className="block">
        <label>Price: </label>
        <input 
            id="input-price"
            value={reducerPrice}
            onChange={e => dispatch(setPrice(e.target.value))}
          />
      </div>
      <button id="submit" type="submit" onClick={inputListing}>Submit</button>
    </div>
  );
};

export default ListingCreationForm;