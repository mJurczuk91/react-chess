import classes from './board-square.module.css';

interface Props {
    color: 'white' | '#986a44',
    children: React.ReactNode,
}

const BoardSquare:React.FC<Props> = (props) => {
    return <div
    className={classes.boardSquare}
    style={{
        backgroundColor: props.color,
    }}>
        {props.children}
    </div>
}

export default BoardSquare;