import React from "react";

import './consumedGameTable.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function ConsumedGameTable(props) {
    const [totalValueGame, setTotalValueGame] = React.useState(0);
    const [listProductConsumed, setListProductConsumed] = React.useState([]);
    const latestGame = props.valueGame;
    const setValueGame = props.setValueGame;
    const [resetGame, setResetGame] = React.useState(false);
    const [totalValueTable, setTotalValuTable] = React.useState(0);
    const products = props.products;

    const productsItems = products.map((item) => <li onClick={() => addProduct(item.name, item.price)}
                                                    className="dropdown-item"
                                                    >
                                                        {`${item.name}: $${item.price}`}
                                                </li>);

    const consumedItems = listProductConsumed.map((item) => <li>{`${item[0]}: $${item[1]}`}</li>)


    const addGame = (latestGame) => {
        if (!resetGame) {
            const addGameToTotal = totalValueTable + latestGame;
            const newTotalValueGame = totalValueGame + latestGame;
            setTotalValueGame(newTotalValueGame);
            setResetGame(true);
            setValueGame(0);
            setTotalValuTable(addGameToTotal);
        }else if (resetGame && latestGame !== 0) {
            setResetGame(false);
            const addGameToTotal = totalValueTable + latestGame;
            const newTotalValueGame = totalValueGame + latestGame
            setTotalValueGame(newTotalValueGame);
            setValueGame(0);
            setTotalValuTable(addGameToTotal);
        }
    }

    const removeGame = () => {
        setValueGame(0);
    }

    const addProduct = (itemName, itemPrice) => {
        const newListProductConsumed = [...listProductConsumed]
        newListProductConsumed.push([itemName, itemPrice]);
        setListProductConsumed(newListProductConsumed);
        const addProductToTotal = totalValueTable + itemPrice;
        setTotalValuTable(addProductToTotal);
    }

    const resetTable = () => {
        setTotalValueGame(0);
        setListProductConsumed([]);
        setTotalValuTable(0);
    }

    return (
        <div className="consumedGameTable">
            <h4 className="titleTableSummary">Resumen y cuenta de la mesa</h4>
            <span className="latestGameInfo">{`El valor del ultimo juego es: $${latestGame}`}</span>
            <div className="gameKeypad">
                <button
                    className="btn btn-success"
                    onClick={() => addGame(latestGame)}
                >
                    agregar juego
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => removeGame()}
                >
                    eliminar juego
                </button>
            </div>
            <span className="consumedTableInfo">La mesa ha consumido:</span>
            <div className="dropdown">
                <span>Agrega productos a la cuenta: </span>
                <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Lista de productos
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {productsItems}
                </ul>
            </div>
            <span>{`El valor de todo el tiempo jugado es: $${totalValueGame}`}</span>
            <ul className="listProductsItems"> 
                {consumedItems}
            </ul>
            <span className="chargeTotalText">{`Total a pagar: $${totalValueTable}`}</span>
            <div className="tableKeypad">
                <button
                    className="btn btn-success"
                    // onClick={() => resetTable()}
                >
                    Facturar mesa
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={() => resetTable()}
                >
                    Reiniciar mesa
                </button>
            </div>
        </div>
    );
}

export { ConsumedGameTable };