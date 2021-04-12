import React, { forwardRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Inquiries = () => {
  //gets the inquiry array and message from the state
  const inquiryList = useSelector(state => state.inquiryReducer.inquiries);
  // const id = useSelector(state => state.inquiryReducer.id);
  return (
    <div>
    {inquiryList.map((item) => {
      return (
        // may need a key prop for li, use id from inquiry selector...?
        <li className="inquiry">{item.message}</li>
      )
    })}
    </div>
  );
};

export default Inquiries;



// const appendInquiry = () => {
//   //this for loop is for the test, trying to get inquiryList to cycle through
//   //and create a new element and insert inside the .inqDiv
//   console.log('testing: ' + inquiryList);
//   inquiryList.map(item => {
//     let node = React.createElement("li", { "className" : "inquiry"}, item);
//     const inqDiv = document.getElementById('inqDiv');
//     ReactDOM.render(node, document.getElementById('inqDiv'));
//   });
//   // for(let i = 0; i < inquiryList.length; i++) {
//   //   let node = React.createElement("li", { "className" : "inquiry"}, inquiryList[i].message);
//   //   // ReactDOM.render(node, document.getElementById('inqDiv'));
//   //   const inqDiv = document.getElementById('inqDiv');

//   // }
// };

    // get the input value and make an inquiry listing
    // const inputValue = document.getElementById('input-inquiry').value;
    // let node = document.createElement("li");
    // let textNode = document.createTextNode(inputValue);
    // // let textNode = document.createTextNode(message);  //this displays INITIAL_STATE.message in the reducer
    // node.setAttribute('className','inquiry');
    // node.appendChild(textNode);
    // document.getElementById('inqDiv').appendChild(node);
    // document.getElementById('input-inquiry').value = '';
    
    // this button can be added into each listing
    // <button type="submit">View Inquiries</button>