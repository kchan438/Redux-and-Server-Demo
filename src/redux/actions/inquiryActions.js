//returning an event object
export const getInquiryList = getInq => {
    return ({
        type: 'getInquiryList',
        getInq,
    });
};