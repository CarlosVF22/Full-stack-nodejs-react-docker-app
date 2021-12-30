const sendData = (data) => {
    if (data) {
        axios.post(`${baseURL}/sales`, {
            value: data
        });
        alert(`Se ha enviado una venta por valor de ${data}`);
    } else {
        alert('La venta no puese ser valor 0')
    }
}