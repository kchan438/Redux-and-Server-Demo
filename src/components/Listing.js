import React from 'react';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setUserMode } from '../redux/actions/listingActions';

//this is what i needed to get listing
const Listing = ( {listing} ) => {
  const dispatch = useDispatch();
  const title = useSelector(state => state.listingReducer.title);
  const description= useSelector(state => state.listingReducer.description);
  const type = useSelector(state => state.listingReducer.price);
  const price = useSelector(state => state.listingReducer.price);
  const id = useSelector(state => state.listingReducer.id);
  const userMode = useSelector(state => state.listingReducer.userMode);
  
  console.log(listing);

  //1.) Get listing to show up
  //2.) Write a check if we are on admin or user page, 'Delete' or 'Send Inquiry'

  return (
    <table className="listing">
      <tbody>
        <tr>
          <td>Title: </td>
          <td>{title}</td>
        </tr>
        <tr>
          <td>Description: </td>
          <td>{description}</td>
        </tr>
        <tr>
          <td>Type: </td>
          <td>{type}</td>
        </tr>
        <tr>
          <td>Price: </td>
          <td>{price}</td>
        </tr>
        <tr>
          <td>
            {/* {checkUserMode} */}
          </td>
          <td>
            <button>View Inquiries</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Listing;

  //checks if userMode is either an admin or user
  // const checkUserMode = () => {
  //   console.log('checkUsermode');
  //   if(userMode) {
  //       return(
  //         <div>
  //           <input type="text" />
  //           <button type="submit" id="submitInquiry">Send Inquiry</button>
  //         </div>
  //       );
  //   } else {
  //     return <button type="submit" id="deleteListing">Delete</button>;
  //   }
  // };


  // const deleteListing = () => {
  //   Axios.get(`http://localhost:3000/api/deleteListing?Id=${id}`)
  //   .then((res) => {
  //     console.log(res.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // };

  // const viewInquiries = () => {
  //     Axios.get('http://localhost:3000/api/viewListings')
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   // needs one more Axios call?
  // };

  // const makeInquiry = () => {
  //   Axios.post('http://localhost:3000/api/makeInquiry')
  //   .then((res) => {
  //     console.log(res.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // };