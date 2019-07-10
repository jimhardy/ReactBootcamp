import React, { Component } from 'react';
import Cell from './Cell';
import './Board.css';
import { trueFalse } from './helpers';

class Board extends Component {
    static defaultProps = {
        nrows: 5,
        ncols: 5,
        chanceLightStartsOn: 5
    };

    constructor(props) {
        super(props);

        // set initial state
        this.state = {
            hasWon: false,
            board: this.createBoard(),
            moves: 0
        };
    }

    resetButton = () => {
        this.setState(st => ({
            hasWon: false,
            board: this.createBoard(),
            moves: 0
        }));
    };

    createBoard = () => {
        // create array-of-arrays of true/false values
        let board;
        do {
            board = Array(this.props.nrows)
                .fill()
                .map(() =>
                    // Array(this.props.ncols).fill(false)
                    Array.from({ length: this.props.ncols }, () =>
                        trueFalse(this.props.chanceLightStartsOn)
                    )
                );
        } while (this.hasWonCheck(board));
        return board;

    };

    //  handle changing a cell: update board & determine if winner
    flipCellsAround = coord => {
        let { ncols, nrows } = this.props;
        let board = this.state.board;

        let [y, x] = coord.split('-').map(Number);
        let hasWon = this.state.hasWon;
        let moves = this.state.moves;

        function flipCell(y, x) {
            // if this coord is actually on board, flip it
            if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
                board[y][x] = !board[y][x];
            }
        }
        // flip cell and cells surrounding cell
        flipCell(y, x);
        flipCell(y, x - 1);
        flipCell(y, x + 1);
        flipCell(y - 1, x);
        flipCell(y + 1, x);

        // if every value in array is false then win
        hasWon = this.hasWonCheck(board);
        // increment moves counter
        moves = moves + 1;
        this.setState({ board, hasWon, moves });
    };

    hasWonCheck = arr => {
        return arr
            .map(rows =>
                rows.every(row => {
                    return row === false;
                })
            )
            .every(cell => {
                return cell;
            });
    };

    // make table board
    renderBoard = () => {
        return this.state.board.map((row, yCoord) => (
            <tr key={yCoord}>
                {row.map((cell, xCoord) => (
                    <Cell
                        value={`${yCoord}-${xCoord}`}
                        key={`${yCoord}-${xCoord}`}
                        isLit={cell}
                        flipCellsAroundMe={this.flipCellsAround}
                    />
                ))}
            </tr>
        ));
    };

    render() {
        // if the game is won, just show a winning msg
        return (
            <div>
                <div className="container">
                    <span className="neon">Lights</span>
                    <span className="flux">Out</span>
                </div>
                <h4>Total Moves: {this.state.moves}</h4>
                {this.state.hasWon ? (
                    <h1 className="flux">YOU WIN</h1>
                ) : (
                    <table className="Board">
                        {this.state.board ? (
                            <tbody>{this.renderBoard()}</tbody>
                        ) : (
                            <h1>loading..</h1>
                        )}
                    </table>
                )}
                <h3 id="Restart" className="flux" onClick={this.resetButton}>
                    Restart?
                </h3>
            </div>
        );
    }
}

export default Board;
