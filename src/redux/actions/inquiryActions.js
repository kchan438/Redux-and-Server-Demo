//returning an event object

//save data into the store
export const setInquiryList = inquiries => {
  return ({
    type: 'setInquiryList',
    inquiries,
  });
};

export const sendInquiry = message => {
  return ({
    type: 'sendInquiry',
    message,
  });
};

export const appendInquiry = appendInq => {
  return ({
    type: 'appendInquiry',
    appendInq,
  });
};