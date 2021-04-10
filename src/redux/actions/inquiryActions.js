//returning an event object

//retrieve data from the store
export const getInquiryList = getInq => {
    return ({
        type: 'getInquiryList',
        getInq,
    });
};

//save data into the store
export const setInquiryList = message => {
    return({
        type: 'setInquiryList',
        message,
    });
};