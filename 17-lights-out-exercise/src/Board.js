import React, { Component } from 'react';
import Cell from './Cell';
import './Board.css';

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
    static defaultProps = {
        nrows: 6,
        ncols: 6
        // chanceLightStartsOn: 0.1
    };

    constructor(props) {
        super(props);

        // TODO: set initial state
        this.state = {
            hasWon: false,
            board: this.createBoard()
        };
    }

    /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

    createBoard = () => {
        // create array-of-arrays of true/false values
        return Array(this.props.nrows)
            .fill()
            .map(() => Array(this.props.ncols).fill(false));
    };

    /** handle changing a cell: update board & determine if winner */

    flipCellsAround = coord => {
        console.log(coord);
        let { ncols, nrows } = this.props;
        let board = this.state.board;

        let [y, x] = coord.split('-').map(Number);
        let hasWon = this.state.hasWon;

        function flipCell(y, x) {
            // if this coord is actually on board, flip it
            if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
                console.log(y, x);
                board[y][x] = !board[y][x];
                // flip this cell and the cells around it
                y >= 0 && (board[y - 1][x] = !board[y - 1][x]);
                y < ncols - 1 && (board[y + 1][x] = !board[y + 1][x]);
                x >= 0 && (board[y][x - 1] = !board[y][x - 1]);
                x < nrows - 1 && (board[y][x + 1] = !board[y][x + 1]);
            }
        }
        flipCell(y, x);

        // win when every cell is turned off
        // TODO: determine is the game has been won
        // if every value in array is false then win
        // hasWon = board.map(rows =>
        //     rows.every((row) => {
        //         return row === false
        //     })
        // );
hasWon = board.every((cell) => {
  return cell === false;
})

        console.log(hasWon);
        this.setState({ board, hasWon });
    };

    // TODO
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

    /** Render game board or winning message. */
    render() {
        // if the game is won, just show a winning msg & render nothing else

        return (
            <table>
                <tbody>{this.renderBoard()}</tbody>
            </table>
        );
    }
}

export default Board;
