function CreateButton (props) {
    return (
        <>
        <button onClick={props.handleClick} >{props.text}</button>
        </>
    )
}
