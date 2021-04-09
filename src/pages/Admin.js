import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ViewListings from '../components/ViewListings';
import ListingCreationForm from '../components/ListingCreationForm';
import Inquiries from '../components/Inquiries';
import { getInquiry } from '../redux/actions/inquiryActions';

//dont think we need a store here since theres one in index.js


const Admin = () => {
  return (
    <div>
      <h1>Admin</h1>
      <h3>Make New Listing</h3>
      <ListingCreationForm />
      <Inquiries />
      <ViewListings />
    </div>
  );
};

export default Admin;