import React from 'react';
import ViewListings from '../components/ViewListings';
import ListingCreationForm from '../components/ListingCreationForm';
import Inquiries from '../components/Inquiries';

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