import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getInquiryList } from '../redux/actions/inquiryActions';


const Inquiries = () => {
  const dispatch = useDispatch();
  const inquiryList = useSelector(state => state.inquiryReducer.inquiries);

  const getInquiries = () => {
    console.log('test');
    dispatch(getInquiryList(inquiryList));
    let node = document.createElement("LI");
    document.getElementsByClassName('inqDiv').appendChild(node);
  };

  return (
    <div className="inqDiv">
      <button type="button" onClick={getInquiries}>View Inquiries</button>
    </div>
  );
};

export default Inquiries;