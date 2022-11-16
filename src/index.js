import { React, Suspense } from 'react';
import { Loader } from '@react-three/drei'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Suspense fallback={null}>
      <App />
    </Suspense>
    <Loader />
  </>
);