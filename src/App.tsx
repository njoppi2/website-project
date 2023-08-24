import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import Footer from './Components/Footer';

const App: React.FC = () => (
    <div className='App'>
        <Navigation />
        <Main />
        <Footer />
    </div>
);

export default App;
