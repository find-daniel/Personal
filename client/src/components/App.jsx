import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App;