import Axios from 'axios';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTitle, setDescription, setType, setPrice, pushListings } from '../redux/actions/listingActions';

const ListingCreationForm = () => {

  const dispatch = useDispatch();
  const reducerTitle = useSelector(state => state.listingReducer.title);
  const reducerDescription = useSelector(state => state.listingReducer.description);
  const reducerType = useSelector(state => state.listingReducer.postType);
  const reducerPrice = useSelector(state => state.listingReducer.price);
  
  const inputListing = () => {
    const body = {
      title: document.getElementById('input-title').value,
      description: document.getElementById('input-description').value,
      type:  document.getElementById('input-type').value,
      price: document.getElementById('input-price').value,
    };

    Axios.post('http://localhost:3001/api/createListing', body)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    Axios.get('http://localhost:3001/api/viewListings')
      .then((res) => {
        console.log(res.data.items);
        dispatch(pushListings(res.data.items));
      })
      .catch((err) => {
        console.log(err);
      });
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