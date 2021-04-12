import React from 'react';
import ViewListings from '../components/ViewListings';
import Listing from '../components/Listing';

const User = () => {
  return (
    <div>
      <h1>User</h1>
      <ViewListings userMode={true} />
      {/* Listing is used for testing for userMode check */}
      <Listing />
    </div>
  );
};

export default User;