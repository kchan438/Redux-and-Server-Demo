import React from 'react';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setInquiryList, sendInquiry, appendInquiry } from '../redux/actions/inquiryActions';

//this is what i needed to get listing
const Listing = ( props ) => {
  const dispatch = useDispatch();
  const inquiries = useSelector(state => state.inquiryReducer.inquiries);
  const message = useSelector(state => state.inquiryReducer.message);
  
  //1.) Get listing to show up -DONE
  //2.) Write a check if we are on admin or user page, 'Delete' or 'Send Inquiry'

  //axios call to deleteListing based on id given
  //STILL NEEDS TO BE WORKED ON
  const deleteListing = () => {
    Axios.get(`/api/deleteListing?id=${props.listing.id}`)
    .then((res) => {
      dispatch(deleteListing(props.listing.id));
      // console.log(res.data);
      //should go into store and delete listing
    })
    .catch((err) => {
      console.log(err);
    });
  };

//axios call to getInquries based on listing.id
const viewInquiries = () => {
  Axios.get(`/api/getInquiries?listingId=${props.listing.id}`)
  .then((res) => {
    dispatch(setInquiryList(res.data.inquiries));
    //might need a return statement here to get the listing info
  })
  .catch((err) => {
    console.log(err);
  });
};

//axios call to makeInquiries API based on listing.id
const makeInquirySubmit = () => {
  const message = {
    message: document.getElementById("textArea").value,
  };
  console.log('inquiries: ' + inquiries);
  Axios.post(`/api/makeInquiry?listingId=${props.listing.id}`, message)
  .then((res) => {
    // console.log(res.data);
    dispatch(appendInquiry(message.message));
    document.getElementById("textArea").value = '';
    // console.log('textarea: ' + document.getElementById("textArea").value);
  })
  .catch((err) => {
    console.log(err);
  });
};
const textAreaHandleChange = (e) => {
  const action = sendInquiry(e.target.value);
  dispatch(action);
}

  return (
    <table className="listing">
      <tbody>
        <tr>
          <td>Title: </td>
          <td>
            {/* {listing === undefined && (console.log('listing is undefined')) || listing === !undefined && (listing.title)} */}
            {props.listing.title}
          </td>
        </tr>
        <tr>
          <td>Description: </td>
          <td>
          {/* {listing === undefined && (console.log('listing is undefined')) || listing === !undefined && (listing.description)} */}
            {props.listing.description}
          </td>
        </tr>
        <tr>
          <td>Type: </td>
          <td>
            {/* {listing === undefined && (console.log('listing is undefined')) || listing === !undefined && (listing.type)} */}
            {props.listing.type}
          </td>
        </tr>
        <tr>
          <td>Price: </td>
          <td>
          {/* { listing === undefined && (console.log('listing is undefined')) || listing === !undefined && (listing.price)} */}
            {props.listing.price}
          </td>
        </tr>
        <tr>
          {props.userMode === undefined && (
            <tr>
              <td>
                <button type="submit" id="deleteInquiry" onClick={deleteListing}>Delete</button>
              </td>
              <td>
                <button onClick={viewInquiries}>View Inquiries</button>
                {console.log('after click viewInquries: ' + JSON.stringify(inquiries))}
              </td>
            </tr>
          )}
          {props.userMode === true && (
            <tr>
              <td>
                <textarea id="textArea" onChange={textAreaHandleChange}>
                </textarea>
              </td>
              <td>
                <button className="submit" type="submit" onClick={makeInquirySubmit}>Send Inquiry</button>
              </td>
              <tr>
                {/* {console.log('user inquiries: ' + JSON.stringify(inquiries))} */}
                <p hidden>{message}</p>
              </tr>
            </tr>
          )}
        </tr>
      </tbody>
    </table>
  );
};

export default Listing;