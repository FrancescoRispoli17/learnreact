import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './exsercises/interpolation/App';
import App from './App';
// import App from './exsercises/useEffect/App';
//import App from './exsercises/flush/App';
// import App from './exsercises/ref/App';
// import App from './exsercises/stateParent/App';
// import App from'./exsercises/stateStructure/App'
// import App from './exsercises/array/App';
// import App from './exsercises/immer/App'
// import App from './exsercises/stateAsync/App';
// import App from './exsercises/state/App';
//  import App from './exsercises/events/App';
// import App from './exsercises/compPure/App';
// import App from './exsercises/lists/App';
// import App from './exsercises/props/App';
// import App from './interpolation/App'
// import App from './exsercises/condRendering/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
