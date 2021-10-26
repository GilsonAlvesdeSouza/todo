import {  ChangeEvent, useState } from "react";
import { Item } from "../../types/Item";
import * as St from "./Style";

type Props = {
    item: Item,
}

const ListItem = ({ item }: Props) => {
    
    const [isCheked, setIsChecked] = useState(item.done);

    const changeChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    return (
        <St.Container done={isCheked}>
            <input 
            id={`${item.id}`} 
            type='checkbox' 
            checked={isCheked} 
            onChange={(event) => changeChecked(event)}/>
            <label htmlFor={`${item.id}`} >{item.name}</label>
        </St.Container>
    );
}

export default ListItem;