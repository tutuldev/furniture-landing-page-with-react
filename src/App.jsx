import React from 'react';
import './App.css'
import './Index.css'
import { Link, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <Navbar/>
    <main className='min-h-screen'>
    <Outlet/>
    </main>
     <Footer/>
    </>
  );
};

export default App;