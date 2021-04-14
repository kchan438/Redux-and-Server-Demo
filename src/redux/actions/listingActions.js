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

export const setListings = listingsArr => ({
    type: 'setListings',
    listingsArr,
});

export const setUserMode = userMode => ({
        type: 'setUserMode',
        userMode,
});

export const deleteListing = deleteListing => ({
        type: 'deleteListing',
        deleteListing,
});