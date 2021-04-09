//returning an event object
export const getInquiry = getInq => {
    return ({
        type: 'getInquiry',
        getInq,
    });
};