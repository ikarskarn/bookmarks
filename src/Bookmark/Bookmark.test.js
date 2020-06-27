import React from 'react';
import ReactDOM from 'react-dom';
import Bookmark from './Bookmark';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Bookmark />, div);
  ReactDOM.unmountComponentAtNode(div);
});