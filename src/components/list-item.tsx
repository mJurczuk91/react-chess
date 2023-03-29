import { useDrag } from "react-dnd";

const ListItem:React.FC<{description: string, children?: React.ReactNode}> = ({description}) => {
    const [{ isDragging }, drag] = useDrag( () => {
        return {
            type: 'item',
            item: {description},
            collect: (monitor) => ({
                isDragging: monitor.isDragging()
            })
        }
    })
    return <div
        style={{
            width: 'fit-content',
            border: '1px solid red',
        }}
        ref={drag}>
        <p>{description}</p>
    </div>
}

export default ListItem;