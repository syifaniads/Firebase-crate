import React from 'react';
import './App.css';
// Import any existing components
// import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" style={{ 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      {/* Your existing Navbar component might be here */}
      {/* <Navbar /> */}
      
      <main style={{ flex: 1 }}>
        {/* Your main content goes here */}
        <h1>Welcome to Crate</h1>
        <p>This is the main content of our application.</p>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
