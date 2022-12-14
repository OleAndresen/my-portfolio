import { React, Suspense } from 'react';
import { Loader } from '@react-three/drei'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Suspense fallback={null}>
        <App />
      </Suspense>
      <Loader />
    </BrowserRouter>
  </>
);