import React from 'react';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setInquiryList, sendInquiry } from '../redux/actions/inquiryActions';
import { setListings } from '../redux/actions/listingActions';

//this is what i needed to get listing
const Listing = ( props ) => {
  const dispatch = useDispatch();
  const inquiries = useSelector(state => state.inquiryReducer.inquiries);
  const [textAreaMessage, setMessage] = React.useState('');

  //axios call to deleteListing based on id given
  const deleteListing = () => {
    Axios.get(`/api/deleteListing?id=${props.listing.id}`)
      .then((res) => {
        dispatch(setListings(res.data.items));
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
      message: textAreaMessage,
    };
    console.log('inquiries: ' + inquiries);
    //this axios call will make an inquiry passed on to makeInquiry and will be dispatched into listingReducer
    Axios.post(`/api/makeInquiry?listingId=${props.listing.id}`, message)
      .then((res) => {
        dispatch(setListings(res.data.items));
      })
      .catch((err) => {
        console.log(err);
      });
    //this will reset the textarea tag after submitting
    setMessage('');
  };
  const textAreaHandleChange = (e) => {
    setMessage(e.target.value);
    const action = sendInquiry(e.target.value);
    dispatch(action);
  };

  return (
    <table className="listing">
      <tbody>
        <tr>
          <td>Title: </td>
          <td>
            {props.listing.title}
          </td>
        </tr>
        <tr>
          <td>Description: </td>
          <td>
            {props.listing.description}
          </td>
        </tr>
        <tr>
          <td>Type: </td>
          <td>
            {props.listing.type}
          </td>
        </tr>
        <tr>
          <td>Price: </td>
          <td>
            {props.listing.price}
          </td>
        </tr>
        <tr>
          {props.userMode === undefined && (
            <tr>
              <td>
                <button id="deleteInquiry" onClick={deleteListing}>Delete</button>
              </td>
              <td>
                <button onClick={viewInquiries}>View Inquiries</button>
              </td>
            </tr>
          )}
          {props.userMode === true && (
            <tr>
              <td>
                <textarea value={textAreaMessage} className="textArea" onChange={textAreaHandleChange}>
                </textarea>
              </td>
              <td>
                <button className="submit" onClick={makeInquirySubmit}>Send Inquiry</button>
              </td>
              <tr>
                <p hidden>{textAreaMessage}</p>
              </tr>
            </tr>
          )}
        </tr>
      </tbody>
    </table>
  );
};

export default Listing;