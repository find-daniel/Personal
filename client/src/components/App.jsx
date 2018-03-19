import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <hr/>
        <About />
        <hr/>
        <Portfolio />
        <hr/>
        <Contact />
      </div>
    )
  }
}

export default App;