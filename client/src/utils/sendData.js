import axios from 'axios';

const sendData = (data) => {
    const baseURL = 'http://localhost:9000/api/v1'
    if (data) {
        axios.post(`${baseURL}/sales`, {
            value: data
        });
        alert(`Se ha enviado una venta por valor de ${data}`);
    } else {
        alert('La venta no puede ser valor 0')
    }
}

export {sendData}