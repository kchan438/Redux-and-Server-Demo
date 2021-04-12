import React from 'react';
import Axios from 'axios';
import { useSelector } from 'react-redux';

const Listing = () => {

  // const title = useSelector(state => state.listingReducer.title);
  // const description= useSelector(state => state.listingReducer.description);
  // const type = useSelector(state => state.listingReducer.price);
  // const price = useSelector(state => state.listingReducer.price);
  // const id = useSelector(state => state.listingReducer.id);

  const deleteListing = () => {
    Axios.get(`http://localhost:3000/api/deleteListing?Id=${id}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const viewInquiries = () => {
      Axios.get('http://localhost:3000/api/viewListings')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // needs one more Axios call?
  };

  const makeInquiry = () => {
    Axios.post('http://localhost:3000/api/makeInquiry')
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <table className="listing">
      <tr>
        <td>Title:    </td>
        <td id="listingTitle">{title}</td>
      </tr>
      <tr>
        <td>Description:    </td>
        <td id="listingDescription">{description}</td>
      </tr>
      <tr>
        <td>Type:    </td>
        <td id="listingType">{type}</td>
      </tr>
      <tr>
        <td>Price:    </td>
        <td id="listingPrice">{price}</td>
      </tr>
      <tr>
        {/* May need to change state here for when viewing between user and admin */}
        {/* <input id="makeInquiry"/> */}
        {/* <button id="inquirySubmit">Submit</button> */}
        <button onClick={deleteListing}>Delete</button>
        <button onClick={viewInquiries}>View Inquiries</button>
      </tr>
    </table>
  );
};

export default Listing;