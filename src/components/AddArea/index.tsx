import { KeyboardEvent, useState } from "react";
import * as St from "./styles";

type Props = {
    onEnter: (taskName: string) => void
};

export const AddArea = ({onEnter}: Props ) => {

    const [inputText, setInputText] = useState('');

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const handleKeyUp = (event: KeyboardEvent) => {
        if((event.code === 'Enter' || event.code === 'NumpadEnter') && inputText !== ''){
            onEnter(inputText);
            setInputText('');
        }
    };

    return (
        <St.Container>
            <div className='image'>➕</div>
            <input
                type='text'
                placeholder='Adicione uma tarefa'
                value={inputText}
                onChange={(event) => onChangeInput(event)}
                onKeyUp={handleKeyUp}
            />
        </St.Container>
    );
};