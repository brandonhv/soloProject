
import React from 'react';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';



import App from './App.jsx';

console.log('We got herer........');

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App />);