import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './containers/App';

// import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
