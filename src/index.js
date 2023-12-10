import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Main  from './Main';
import Header from './pages/header/header.js'
import Footer from './pages/footer/footer.js';
import Contacts from './pages/contacts/contacts.js';
import Portfolio from './pages/portfolio/portfolio.js';
import Gallery from './pages/gallery/gallery.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <Header />
    <RouterProvider router={router} />  
    <Footer />      
    </React.StrictMode>
);

