import './App.css';
import PoolTable from './image/table.png';
import Image from 'react-bootstrap/Image';
import React from 'react';
import {Chronometer} from './components/Chronometer';
import { Container } from 'react-bootstrap';
// import { getData } from './utils/getData';


import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const API = 'http://localhost:9000/api/v1/testapi';
  const [data,setData] = React.useState('cargando');

  const getData = async (API) => {
    const response = await fetch(API);
    const data = await response.json();
    setData(data.text);
  }

  React.useEffect(() => {
    getData(API);
  },[]);


  return (
    <React.Fragment>
      <Container>
        <p>{data}</p>
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
