import './App.css';
import PoolTable from './image/table.png';
import Image from 'react-bootstrap/Image';
import React from 'react';
import {Chronometer} from './components/Chronometer';
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <React.Fragment>
      <Container>
        <Image src={PoolTable} fluid={true}/>
        <Chronometer/>
      </Container>
      <Container>
        <Image src={PoolTable} fluid={true}/>
        <Chronometer/>
      </Container>
    </React.Fragment>
      

  );
}

export default App;
