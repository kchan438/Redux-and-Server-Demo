export const setTitle = title => ({
        type: 'setTitle',
        title,
});

export const setDescription = description => ({
        type: 'setDescription',
        description,
});

export const setType = postType => ({
        type: 'setType',
        postType,
});

export const setPrice = price => ({
        type: 'setPrice',
        price,
});

export const pushListings = listingsArr => ({
    type: 'pushListings',
    listingsArr,
});

export const getListings = listings => ({
        type: 'getListing',
        listings,
});

export const setUserMode = userMode => ({
        type: 'setUserMode',
        userMode,
});