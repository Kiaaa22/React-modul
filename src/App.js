import React from 'react';
import Utama from './component/Utama';
import {Link} from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';

class App extends React.Component {
  render() {
    return(
      <div> 
        <Navbar />
        {/* <Home /> */}
        <Utama/>
        {/* <hr />
        <h3 className='text-4wl font-semibold font-signature'>
        <Link to="/"> Beranda </Link> | 
        <Link to="/TentangSaya"> Tentang Saya </Link> | 
        <Link to="/Karya"> Karya Saya </Link> | 
        <Link to="/Kontak"> Kontak </Link> 
        </h3>
        <hr />
        <p><Utama/></p> */}
      </div>
    );
  }
}

export default App;
