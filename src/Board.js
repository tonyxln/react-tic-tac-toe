import React from 'react';
import Square from './Square';

export default class Board extends React.Component {
    renderSquare(rowCount, colCount) {
        const keyVal = `${rowCount},${colCount}`;
        const i = (rowCount * 3) + colCount;
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
                keyVal={keyVal}
                id={i}
            />
        );
    }

    render() {
        let grid = [];
        for (let rowCount= 0; rowCount < 3; rowCount++) {
            let row = [];
            for (let colCount = 0; colCount < 3; colCount++) {
                row.push(this.renderSquare(rowCount, colCount));
            }
            grid.push(<div className="board-row" key={rowCount}>{row}</div>);
        }

        return (
            <div>
                {grid}
            </div>
        );
    }
}