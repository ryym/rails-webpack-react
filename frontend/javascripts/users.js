import React from 'react';
import { render } from 'react-dom';
import UserList from './components/UserList';

window.addEventListener('load', () => {
  const elm = document.getElementById('user-list');
  if (elm) {
    render(<UserList />, elm);
  }
})
