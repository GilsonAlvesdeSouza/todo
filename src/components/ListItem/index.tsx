import { Item } from "../../types/Item";

type Props = {
    item: Item
}

const ListItem = ({item}: Props) => {
    return (
        <div>{item.name}</div>
    );
}

export default ListItem;