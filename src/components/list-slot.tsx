import { useDrop } from "react-dnd";

interface Props {
    index: number;
    children?: React.ReactNode;
}

const ListSlot:React.FC<Props> = ({index}) => {
    const [{isOver}, drop] = useDrop( () => {
        return {
            accept: 'item',
            drop: (item: any, monitor) => {
                console.log(item, monitor);
            },
            collect: (monitor) => ({
                isOver: monitor.isOver()
            }),
        }
    })
    return <div 
            ref={drop}
            data-number={index}
            key={index}
            style={{
                backgroundColor: isOver ? 'red' : 'white',
                width: '300px',
                height: '100px',
                border: "2px solid black"}}>
            {index}
        </div>
}

export default ListSlot;