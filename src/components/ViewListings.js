import Axios from 'axios';
import React, { useEffect } from 'react';
import Listing from './Listing';
import { useDispatch, useSelector } from 'react-redux';
import { setListings } from '../redux/actions/listingActions';

const ViewListings = (props) => {
  const dispatch = useDispatch();
  const listings = useSelector(state => state.listingReducer.listings);

  //useEffect() will automatically refresh the ViewListings listings by this Axios call
  useEffect(() => {
    Axios.get('/api/viewListings')
      .then((res) => {
        dispatch(setListings(res.data.items));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  return (
    <div className="viewListingsDiv">
      <h1>ViewListings</h1>
      {
        listings.map((item) => {
          return (
            <ul key="viewListings">
              <Listing listing={item} userMode={props.userMode} />
            </ul>
          );})
      }
    </div>
  );
};

export default ViewListings;