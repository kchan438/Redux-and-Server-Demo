import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from '../redux/reducers/rootReducer';
import thunk from 'redux-thunk';

import ListingCreationForm from './ListingCreationForm';
import axios from 'axios';

jest.mock('axios');

describe('<ListingCreationForm>', () => {
  it('renders a listing', (done) => {

    const randomPrice = Math.random() + '';
    const randomType = Math.random() + '';
    const randomDescription = Math.random() + '';
    const randomTitle = Math.random() + '';


    const store = createStore(rootReducer, applyMiddleware(thunk));
    const { container, queryByText, getByDisplayValue } = render(
      <Provider store={store}>
        <ListingCreationForm />
      </Provider>
    );

    expect(store.getState().listingReducer.listings.length).toBe(0);

    expect(store.getState().listingReducer.price).toBe('');
    expect(store.getState().listingReducer.type).toBe('');
    expect(store.getState().listingReducer.title).toBe('');
    expect(store.getState().listingReducer.description).toBe('');

    expect(queryByText(randomDescription)).not.toBeInTheDocument();
    fireEvent.change(container.querySelector('#input-description'), { target: { value: randomDescription } });
    expect(store.getState().listingReducer.description).toBe(randomDescription);
    expect(getByDisplayValue(randomDescription)).toBeInTheDocument();

    expect(queryByText(randomType)).not.toBeInTheDocument();
    fireEvent.change(container.querySelector('#input-type'), { target: { value: randomType } });
    expect(store.getState().listingReducer.type).toBe(randomType);
    expect(getByDisplayValue(randomType)).toBeInTheDocument();

    expect(queryByText(randomPrice)).not.toBeInTheDocument();
    fireEvent.change(container.querySelector('#input-price'), { target: { value: randomPrice } });
    expect(store.getState().listingReducer.price).toBe(randomPrice);
    expect(getByDisplayValue(randomPrice)).toBeInTheDocument();

    expect(queryByText(randomTitle)).not.toBeInTheDocument();
    fireEvent.change(container.querySelector('#input-title'), { target: { value: randomTitle } });
    expect(store.getState().listingReducer.title).toBe(randomTitle);

    axios.post.mockImplementation(() => Promise.resolve({}));
    axios.get.mockImplementation(() => {
      return Promise.resolve({
        data: {
          items: [
            {
              description: 'This is my item for sale.',
              type: 'lawnEquipment',
              price: 456,
              title: 'Lawn Mower.',
              id: 'a'
            },
            {
              description: 'This is my item for sale.',
              type: 'gymEquipment',
              price: 123,
              title: 'Gym equipment for sale.',
              id: 'b'
            }
          ],
        }
      });
    }
    );
    fireEvent.click(container.querySelector('#submit'));
    setTimeout(() => {
      expect(axios.post.mock.calls.length).toBe(1);
      expect(axios.post.mock.calls[0][0]).toBe('/api/createListing');
      expect(axios.post.mock.calls[0][1].description).toBe(randomDescription);
      expect(axios.post.mock.calls[0][1].type).toBe(randomType);
      expect(axios.post.mock.calls[0][1].price).toBe(randomPrice);
      expect(axios.post.mock.calls[0][1].title).toBe(randomTitle);
      expect(axios.get.mock.calls.length).toBe(1);
      // refresh after listing creation
      expect(axios.get.mock.calls[0][0]).toBe('/api/viewListings');
      expect(store.getState().listingReducer.listings.length).toBe(2);
      done();
    }, 2);
  });
});