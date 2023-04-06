interface Props {
    color: 'white' | 'black',
    children: React.ReactNode,
}

const BoardSquare:React.FC<Props> = (props) => {
    return <div style={{
        backgroundColor: props.color,
    }}>
        {props.children}
    </div>
}

export default BoardSquare;