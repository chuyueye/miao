

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// class Square extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         value: null,
//     //     }
//     // }
//     render() {
//         return (
//             <button
//                 className="square"
//                 onClick={() => this.props.onClick()}
//             >
//                 {this.props.value}
//                 {/* change the value from props to state */}
//             </button>
//         );
//     }
// }

function Square(props) {
    // console.log(this) //undefined index.js:28 
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

class Board extends React.Component {
    // constructor(props) {
    //     super(props); //React.Component.constructor
    //     this.state = {
    //         squares: Array(9).fill(null),
    //         xIsNext: true, // first move default by X,each time changes
    //     }
    // }
    // handleClick(i) {
    //     const squares = this.state.squares.slice(); // make copy of slice() from Board.state
    //     if (calculateWinner(squares) || squares[i]) {
    //         return;
    //     }
    //     squares[i] = this.state.xIsNext ? 'X' : 'O';
    //     // array squares is local varible of the function "handleClick"
    //     // this means the Board Component
    //     this.setState({
    //         squares: squares, // with copy,override the original state.squares
    //         xIsNext: !this.state.xIsNext,
    //     });
    // }
    renderSquare(i) {
        // passing arguments(by properties)
        // there is no render method of "Square" so far
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        // const winner = calculateWinner(this.state.squares);
        // let status;

        // if (winner) {
        //     status = 'Winner: ' + winner;
        //     // if (winner === 'Tie!') { status = 'Tie!' }; // Tier! no 'Winner'
        // } else {
        //     status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        // }
        // //   const a = 1;

        return (
            <div>
                {/* <div className="status">{status}</div> */}
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>

            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        }
    }
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        // console.log(current);
        const squares = current.squares.slice(); // make copy of slice() from state
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState(
            {
                history: history.concat([{
                    //Return value The new length property of the object upon which the method was called.
                    squares: squares,
                }]), // with copy,override the original 
                stepNumber: history.length,
                xIsNext: !this.state.xIsNext,
            }
        );   // asynchronous
        console.log(this.state, this.state.history.length, this.state.history); // for testing
    }
    jumpTo(step) {
        // console.log(history)
        this.setState(
            {
                // history: history.slice(step + 1, history.length - 1),
                stepNumber: step, // index of array history
                xIsNext: (step % 2) === 0, // even to use 'X',odd to use 'O'
            }
        )
    }
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];/* history[history.length - 1]; */
        const winner = calculateWinner(current.squares);
        const moves = history.map(
            (step, move) => {    // elements,index,array
                const desc = move ?
                    'Go to move #' + move :
                    'Go to game start';
                return (
                    <li key={move}>
                        <button onClick={() => this.jumpTo(move)}>{desc}</button>
                    </li>
                );
            }
        );


        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
                <div>
                    {/* <Reload /> */}
                </div>
            </div>
        );
    }
}
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    if (squares.indexOf(null) === -1) { return 'Tie!' }
    return null;
}
function Reload() {
    return (
        <button onClick={(e) => { console.log(e); window.location.reload() }}>
            "Reload"
        </button>
    )
}
// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
