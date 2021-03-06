import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './Footer/Footer';
import Header from './Header/Header';


ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <App />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

