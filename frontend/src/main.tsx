import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import Routes from './routes/Routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="application-container">
      <Routes />
    </div>
  </React.StrictMode>
);
