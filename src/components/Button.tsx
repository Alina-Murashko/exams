type PropsButton={
    name:string,
    onClick:()=>void
}
export const Button=(props:PropsButton)=>{
    const onClickHandler=()=>props.onClick()


    return(
        <button onClick={onClickHandler}>{props.name}</button>
    )
}
