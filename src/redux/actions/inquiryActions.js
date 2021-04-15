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