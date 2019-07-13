// contains all boxes
// render all boxes + box form

import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import uuid from 'uuid/v4';

class BoxList extends Component {
    state = {
        boxes: [],
    };

    // remove box fucntion passed to Box
    removeBox = evt => {
        const newArr = this.state.boxes.filter(box => {
            return box.id !== evt;
        });
        this.setState(state => ({
            boxes: newArr,
        }));
    };

    // add new box function passed to NewBoxForm
    addNewBox = box => {
        const newBox = { ...box, id: uuid() };
        this.setState(state => ({
            boxes: [...state.boxes, newBox],
        }));
    };

    render() {
        return (
            <div>
                <h1>Box Maker Thingy</h1>
                <NewBoxForm addNewBox={this.addNewBox} />
                {this.state.boxes.map(box => (
                    <Box
                        height={box.height}
                        width={box.width}
                        color={box.color}
                        removeBox={this.removeBox}
                        value={box.id}
                        key={box.id}
                    />
                ))}
            </div>
        );
    }
}

export default BoxList;
