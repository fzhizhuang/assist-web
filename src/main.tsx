import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/index.scss';
import '@nutui/nutui-react/dist/style.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
