import React from 'react';
import ReactDOM from 'react-dom/client';
import AppBodySB2 from './sandbox2/AppBodySB2';
import AppSB from './sandbox/AppSB';
//IMPORTANT!!!!! If you want to see the local storage part!!!!!!!!!!!!!!!!!!!!!!!111
//Comment out line 10 and remove comment from line 11
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppBodySB2 />
    {/* <AppSB /> */}
  </React.StrictMode>
);
