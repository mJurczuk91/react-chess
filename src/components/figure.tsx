import { FigureType } from "../types";

interface FigureProps {
    type: FigureType;
}

const Figure:React.FC<FigureProps> = (props) => {
    return <div style={{
        minWidth: '100%',
        minHeight: '100%',
    }}>
        {props.type}
    </div>
}

export default Figure;
