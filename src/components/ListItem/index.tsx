import {  ChangeEvent, useState } from "react";
import { Item } from "../../types/Item";
import * as St from "./Style";

type Props = {
    item: Item,
    onCheck: (cheked: boolean, item: number) => void
}

const ListItem = ({ item, onCheck }: Props) => {
    
    const [isCheked, setIsChecked] = useState(item.done);

    const changeChecked = (event: React.ChangeEvent<HTMLInputElement>, item: number) => {
        setIsChecked(event.target.checked);
        onCheck(event.target.checked, item)
    };

    return (
        <St.Container done={isCheked}>
            <input 
            id={`${item.id}`} 
            type='checkbox' 
            checked={isCheked} 
            onChange={(event) => changeChecked(event, item.id)}/>
            <label htmlFor={`${item.id}`} >{item.name}</label>
        </St.Container>
    );
}

export default ListItem;