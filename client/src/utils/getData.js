import React from "react";

// async function getData (API){
//     const response = await fetch(API);
//     const data = await response.json();
//     return data;
// }

const getData = async (API) =>{
    const [data,setData] = React.useState('cargando');

    const response = await fetch(API);
    const data = await response.json();
    
    return data;
}

export {getData}