import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {GameTable} from './components/GameTable';
import {Modal} from './components/Modal';
import { Navbar } from 'react-bootstrap';

import {Image} from 'react-bootstrap';

import Logo from './image/cueR.png';

function App() {


  return (
    <React.Fragment>
      <header className='header'>
        <div className='logo'>
          <Image src={Logo}/>
        </div>
        <div className='navBar'>
          <Navbar/>
        </div>
      </header>
      <main className='main'>
        <section>
          <form>
            <label>¿Cuantas mesas tienes en tu billar?</label>
            <input type="number"></input>
            <input type="submit" value="Enviar"></input>
          </form>
          <div className='row'>
            <div className='col-sm-12'><GameTable/></div>
            <div className='col-sm-12'><GameTable/></div>
            <div className='col-sm-12'><GameTable/></div>
            <div className='col-sm-12'><GameTable/></div>
          </div>
        </section>
        {/* <Modal>
          <p>Teletransportacion</p>
        </Modal> */}
      </main>
    </React.Fragment>
  );
}

export default App;
