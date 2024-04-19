import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './Components/App/App';
import './common.css';

const domNode = document.getElementById('root');
const root = createRoot(domNode as HTMLElement);
root.render(<App />);
