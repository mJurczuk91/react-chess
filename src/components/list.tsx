import ListItem from "./list-item";
import { useDrop } from "react-dnd";
import ListSlot from "./list-slot";

const List:React.FC = () => {
    const items = ['item1', 'item2', 'item3'];
    const list = [1,2,3,4,5,6,7,8,9,10];

    return <>
        {list.map((item) => { 
            return <ListSlot index={item} />
        })}
        {items.map((item, index) => { return <ListItem description={item} key={index} /> })}
    </>
}

export default List;