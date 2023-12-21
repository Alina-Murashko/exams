type  ButtonPropsType = {
    name: string
    onClickButton: () => void
}


export const Button = (props: ButtonPropsType) => {
    const onClickButtonHandler = () => {
        props.onClickButton()
    }
    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    )
}