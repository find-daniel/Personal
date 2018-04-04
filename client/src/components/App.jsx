import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Tech from './Tech';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import {configureAnchors} from 'react-scrollable-anchor';

configureAnchors({offset: -50});

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <About />
        <Tech />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App;