import styled from "styled-components";

type ContanierProps={
    done: boolean,
};

export const Container = styled.div(({done}: ContanierProps) => (
    `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input{
        width: 25px;
        height: 25px;
        margin-right: 10px;
    }

    label{
        color: #CCC;
        text-decoration: ${done?'line-through': 'initial'};
    }
`
));
