import React from "react";

function TotalValueGame(props) {
    const latestGame = props.latestGame;
    const [totalValueGame, setTotalValueGame] = React.useState(0);
    return (
        <div>
            <span>{totalValueGame}</span>
        </div>
    );
}

export {TotalValueGame};