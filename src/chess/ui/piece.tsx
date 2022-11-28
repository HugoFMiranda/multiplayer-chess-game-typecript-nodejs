import React from 'react';
import { Image } from 'react-konva';

const piece = (props: any) => {
    return (
        <div>
            <Image draggable src={props.image} alt={props.name} />
        </div>
    );
};

export default piece