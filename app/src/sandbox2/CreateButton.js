
function CreateButton (props) {
    return (
        <>
        <button onClick={props.handleClick} >{props.text}</button>
        </>
    )
}
export default CreateButton
