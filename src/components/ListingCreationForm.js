import Axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setTitle, setDescription, setType, setPrice, setListings } from '../redux/actions/listingActions';

const ListingCreationForm = () => {

  //function that fetches data from store
  const dispatch = useDispatch();
  
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
        dispatch(setListings(res.data.items));
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
          onChange={e => dispatch(setTitle(e.target.value))}
        />
      </div>
      <div className="block">
        <label>Description: </label>
        <input 
          id="input-description"
          onChange={e => dispatch(setDescription(e.target.value))}
        />
      </div>
      <div className="block">
        <label>Type: </label>
        <input 
          id="input-type"
          onChange={e => dispatch(setType(e.target.value))}
        />
      </div>
      <div className="block">
        <label>Price: </label>
        <input 
          id="input-price"
          onChange={e => dispatch(setPrice(e.target.value))}
        />
      </div>
      <button id="submit" type="submit" onClick={inputListing}>Submit</button>
    </div>
  );
};

export default ListingCreationForm;