import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/layout/App';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root');

let render =()=>{
    ReactDOM.render(<App />, rootEl)
}

if(module.hot){
    module.hot.accept('./App/layout/App',()=>{
        setTimeout(render)
    })
}

render();
registerServiceWorker();

