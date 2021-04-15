import React from 'react';
import { useSelector } from 'react-redux';

const Inquiries = () => {
  //gets the inquiry array and message from the state
  const inquiryList = useSelector(state => state.inquiryReducer.inquiries);
  // const id = useSelector(state => state.inquiryReducer.id);
  return (
    <div>
      {inquiryList.map((item) => {
        return (
          // may need a key prop for li, use id from inquiry selector...?
          <p key={Math.random() + 100000000}className="inquiry">{item.message}</p>
        );
      })}
    </div>
  );
};

export default Inquiries;