import React from 'react';

const Listing = () => {

  return (
    <table className="listing">
      <tr>
        <td>Title:    </td>
        <td id="listingTitle"></td>
      </tr>
      <tr>
        <td>Description:    </td>
        <td id="listingDescription"></td>
      </tr>
      <tr>
        <td>Type:    </td>
        <td id="listingType"></td>
      </tr>
      <tr>
        <td>Price:    </td>
        <td id="listingPrice"></td>
      </tr>
      <tr>
        {/* May need to change state here for when viewing between user and admin */}
        {/* <input id="makeInquiry"/> */}
        {/* <button id="inquirySubmit">Submit</button> */}
        <button>Delete</button>
        <button>View Inquiries</button>
      </tr>
    </table>
  );
};

export default Listing;