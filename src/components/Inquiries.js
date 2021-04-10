import React, { forwardRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setInquiryList } from '../redux/actions/inquiryActions';

const Inquiries = () => {
  const dispatch = useDispatch();
  //gets the inquiry array and message from the state
  const inquiryList = useSelector(state => state.inquiryReducer.inquiries);
  const message = useSelector(state => state.inquiryReducer.message);
  // console.log(inquiryList);

  const appendInquiry = () => {
    console.log(inquiryList);
    //this for loop is for the test, trying to get inquiryList to cycle through
    //and create a new element and insert inside the .inqDiv
    // for(let i = 0; i < inquiryList.length; i++) {
      //   let node = document.createElement("LI");
      //   let textNode = document.createTextNode(inquiryList[i].message);
      //   node.setAttribute('value','inquiry');
      //   node.appendChild(textNode);
      //   document.getElementById('inqDiv').appendChild(node);
      // }
      // get the input value and make an inquiry listing
    const inputValue = document.getElementById('input-inquiry').value;
    let node = document.createElement("LI");
    let textNode = document.createTextNode(inputValue);
    // let textNode = document.createTextNode(message);  //this displays INITIAL_STATE.message in the reducer
    node.setAttribute('value','inquiry');
    node.appendChild(textNode);
    document.getElementById('inqDiv').appendChild(node);
    document.getElementById('input-inquiry').value = '';
  };

  return (
    //onLoad is used for the test file
    <div id="inqDiv" onLoad={appendInquiry}>
      <label>Make Inquiry: </label>
      <input
        id="input-inquiry"
        onChange={e => dispatch(setInquiryList(e.target.value))}
      />
      {/* this submit button is used for creating a new element within the div
      and it works, when typing in input and then click submit, it creates a new
      element inside of the div  */}
      <button type="submit" onClick={appendInquiry}>View Inquiries</button>
    </div>
  );
};

export default Inquiries;