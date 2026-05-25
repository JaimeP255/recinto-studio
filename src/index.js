import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

// 🎯 INYECCIÓN DE EMERGENCIA: Forzamos el viewport correcto antes de renderizar
const meta = document.createElement('meta');
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
document.head.appendChild(meta);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);