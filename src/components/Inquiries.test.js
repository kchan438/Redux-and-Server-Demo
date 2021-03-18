import React from 'react';
import { render } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from '../redux/reducers/rootReducer';
import thunk from 'redux-thunk';

import Inquiries from './Inquiries';

describe('<Inquiries>', () => {
  it('renders inquiries', () => {
    const message1 = Math.random() + '';
    const message2 = Math.random() + '';
    const store = createStore(rootReducer, applyMiddleware(thunk));
    store.getState().inquiryReducer.inquiries.push({
      message: message1,
    });
    store.getState().inquiryReducer.inquiries.push({
      message: message2,
    });
    const { container, queryByText } = render(
      <Provider store={store}>
        <Inquiries />
      </Provider>
    );
    const inquiries = container.querySelectorAll('.inquiry');
    expect(inquiries.length).toBe(2);
    expect(queryByText(message1)).toBeInTheDocument();
    expect(queryByText(message2)).toBeInTheDocument();
  });
});