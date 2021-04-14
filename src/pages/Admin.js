import React from 'react';
import ViewListings from '../components/ViewListings';
import ListingCreationForm from '../components/ListingCreationForm';
import Inquiries from '../components/Inquiries';
import Listing from '../components/Listing';
import { useDispatch, useSelector } from 'react-redux';
import { setUserMode } from '../redux/actions/listingActions';


const Admin = () => {
  const dispatch = useDispatch();
  const userMode = useSelector(state => state.listingReducer.userMode);

  return (
    <div>
      <h1>Admin</h1>
      <h3>Make New Listing</h3>
      <ListingCreationForm />
      <Inquiries />
      <ViewListings />
      {/* Listing is used for testing for userMode check */}
      {/* <Listing userMode={false} /> */}
    </div>
  );
};

export default Admin;