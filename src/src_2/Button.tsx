import React from "react";


type ButtonPropsType = {
    title: string;
    clicked: () => void
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button onClick={props.clicked}>{props.title}</button>
    )
}