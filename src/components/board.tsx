import { useState } from "react";
import BoardSquare from "./board-square";
import Figure from "./figure";
import { FigureType } from "../types";
import classes from "./board.module.css";

type BoardState = Array<Array<string>>;

const parseFigure = (figure: string):FigureType => {
    switch (figure) {
        case "P":
            return "P";
        case "N":
            return "N";
        case "B":
            return "B";
        case "R":
            return "R";
        case "Q":
            return "Q";
        case "K":
            return "K";
        case "p":
            return "p";
        case "n":
            return "n";
        case "b":
            return "b";
        case "r":
            return "r";
        case "q":
            return "q";
        case "k":
            return "k";
        default:
            return " ";
    }
}

const parseFEN = (fen: string) => {
    const board = fen.split(" ")[0].split("/").map((row) => {
        let newRow = [];
        for (let i = 0; i < row.length; i++) {
            if (isNaN(parseInt(row[i]))) {
                newRow.push(row[i]);
            } else {
                for (let j = 0; j < parseInt(row[i]); j++) {
                    newRow.push(" ");
                }
            }
        }
        return newRow;
    });
    return board;
}

const Board: React.FC = () => {

    const initialFEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
    const [board, setBoard] = useState<BoardState>(parseFEN(initialFEN));

    const buildBoard = () => {
        const _board = [];
        console.log(board[0]);
        for (let i = 0; i < 8; i++) {
            let isWhite = i % 2 === 0;
            const row = [];
            for (let j = 0; j < 8; j++) {
                row.push(<BoardSquare color={isWhite ? 'white' : '#986a44'}>
                    <Figure type={parseFigure(board[i][j])} />
                </BoardSquare>);
                isWhite = !isWhite;
            }
            _board.push(row);
        }
        return _board;
    }

   

    return <div className={classes.board}>
        {buildBoard()}
    </div>
}

export default Board;