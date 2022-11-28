import React from 'react';
import { Image } from 'react-konva';

const piece = (props: any) => {
    return (
        <div>
            <Image image={require("../assets/chessBoard.png")} x={props.x} y={props.y} width={props.width} height={props.height} />
        </div>
    );
};

export default piece